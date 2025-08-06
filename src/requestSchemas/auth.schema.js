import {z} from "zod";

const userRegisterSchema = z.object({
    username: z.string().min(6, {message : "User name must be 6 charactors"}),
    name: z.string(),
    email: z.email({ message: "Invalid email address" }),
    password: z.string().min(8,{message: "Password must be 8 digit characters"}).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/, {message:"Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"}),
    avatar: z.string()
})

export {userRegisterSchema}