import {ZodError} from 'zod'
import { apiError } from '../utils/apiError.utils';

const validate = (schema) => (req, res, next) => {
  try {
    const result = schema.parse(req.body); 
    req.body = result;
    next();
  } catch (error) {
    if (error instanceof ZodError) {
      return next(new apiError(422, 'validation failed', error.errors.map((err) => ({
          path: err.path.join('.'),
          message: err.message,
        }))))
    }
    next(error);
  }
};

export default validate
