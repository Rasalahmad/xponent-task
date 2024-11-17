import express from 'express';
import { JobPostController } from './jobPost.controller.js';

const router = express.Router();

router.post('/add-job', JobPostController.addJobPost);

router.get('/', JobPostController.getAllJobPost);

router.patch('/:id', JobPostController.updateJobPost);

router.delete('/:id', JobPostController.deleteJobPost);

export const JobPostRoutes = router;
