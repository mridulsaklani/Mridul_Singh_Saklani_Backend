import multer from "multer";
import { v4 as uuidv4 } from 'uuid';

const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'video/mp4'];

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../../public")
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + uuidv4()
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const fileFilter = function (req, file, cb) {
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type... Only JPG, PNG, and MP4 are allowed.'), false);
  }
};


export const upload = multer({storage, fileFilter})

