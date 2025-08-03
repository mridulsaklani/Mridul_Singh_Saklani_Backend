import {errorResponse} from "../utils/response.utils.js"

const asyncHandler = (fn) => async(req,res,next) => {
   try {
    await fn(req, res, next)
   } catch (error) {
    errorResponse(res, error.message, error, 500)
   }
}

export {asyncHandler}