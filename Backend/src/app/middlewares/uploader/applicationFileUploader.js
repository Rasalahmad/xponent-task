import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import uploader from '../../utils/fileUpload.js';
import ApiError from '../../../errors/ApiError.js';

function uploadImage(req, res, next) {
  const upload = uploader(
    'application',
    ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'],
    1000000,
    'Only .jpg, jpeg, .png or .pdf format allowed!'
  );

  // call the middleware function with two file fields
  upload.fields([{ name: 'resume', maxCount: 1 }])(req, res, err => {
    console.log(req.files['resume']);
    if (err) {
      const fileError = ApiError.handleFileError(err);
      if (fileError) {
        return res.status(fileError.statusCode).json({
          statusCode: fileError.statusCode,
          message: fileError.message,
          stack: fileError.stack,
        });
      } else {
        throw new ApiError(500, 'Internal Server Error');
      }
    } else {
      const resume = req.files['resume'];
      if (!resume) {
        req.resume = null;
      } else {
        req.resume = resume[0].filename;
      }
      next();
    }
  });
}

// Middleware to delete an image
function deleteImage(image) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  // Check if req.image exists and is a valid image filename
  if (image) {
    const imagePath = path.join(
      __dirname,
      '../../..',
      './uploads/resume/',
      image
    );
    fs.unlink(imagePath, err => {
      if (err) {
        console.error(`Error deleting file: ${err}`);
      }
    });
  }
}

export const ApplicationImage = { uploadImage, deleteImage };
