
import {apiError} from "../utils/apiError.utils"

const userRegistration = (req, res)=>{
     try {
        const payload = req.body;
        payload.type = 'user'
        
        
     } catch (error) {
        throw new apiError(500, error.message, [error])
     }
}


export default {userRegistration}