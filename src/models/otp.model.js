import mongoose from "mongoose";
import { Schema } from "mongoose";
import {OtpTypes} from "../constants/enum"


const otpSchema = new Schema({
    email:{
      type: String,
      trim:true,
      required: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please provide a valid email address"
      ]
    },
    otp:{
        type: Number,
        minlength: 6,
        required: true,
        match: [/^\d{6}$/, "OTP must be a 6-digit number"]
    },
    type:{
       type: String,
       enum: Object.values(OtpTypes),
       required: true
    },
    expiresAt:{
        type: Date,
        required: true
    }


},{timestamps: true})

otpSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

export const Otp =  mongoose.model('otp', otpSchema)
