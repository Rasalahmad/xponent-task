import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync.js';
import sendResponse from '../../../shared/sendResponse.js';
import { JobPostService } from './jobPost.service.js';

const addJobPost = catchAsync(async (req, res) => {
  const { ...newsData } = req.body;
  const result = await JobPostService.addJobPost(newsData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Job added successful',
    data: result,
  });
});

const getAllJobPost = catchAsync(async (req, res) => {
  const result = await JobPostService.getAllJobPost();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Job fetched successfully',
    meta: result.meta,
    data: result.data,
  });
});

const updateJobPost = catchAsync(async (req, res) => {
  const result = await JobPostService.updateJobPost(req.params.id, payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'TJob updated successfully',
    data: result,
  });
});

const deleteJobPost = catchAsync(async (req, res) => {
  const result = await JobPostService.deleteJobPost(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Job deleted successfully',
    data: result,
  });
});

export const JobPostController = {
  addJobPost,
  getAllJobPost,
  updateJobPost,
  deleteJobPost,
};
