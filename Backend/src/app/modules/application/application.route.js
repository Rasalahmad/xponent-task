import express from 'express';
import { ApplicationController } from './application.controller.js';
import { ApplicationImage } from '../../middlewares/uploader/applicationFileUploader.js';

const router = express.Router();

router.post(
  '/add-application',
  ApplicationImage.uploadImage,
  ApplicationController.addApplication
);

export const ApplicationRoutes = router;
