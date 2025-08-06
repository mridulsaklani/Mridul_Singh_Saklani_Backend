import mongoose from "mongoose"

class UserService{

    async handleUserRegistration(payload){
          await mongoose.startSession()
          try {
            
          } catch (error) {
            
          }
    }

}


export default UserService