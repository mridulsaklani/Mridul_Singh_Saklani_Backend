import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs'
import path from 'path'


cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

 const CloudUpload = async (filepath) => {
    try {
      if(!file) return null
      const result = await cloudinary.uploader.upload(filepath, {
        public_id: Date.now(),
        resource_type: "auto",
        folder: 'user',
      });
      
      return result
    } catch (error) {
      fs.unlink(filepath)
      console.error(error);
      return null
    }
  };

  module.exports = CloudUpload