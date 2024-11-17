import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync.js';
import sendResponse from '../../../shared/sendResponse.js';
import { ApplicationService } from './application.service.js';

const addApplication = catchAsync(async (req, res) => {
  const resume = req.resume;
  console.log(resume);
  const { ...newsData } = req.body;
  const data = { ...newsData, resume };
  const result = await ApplicationService.addApplication(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Application added successful',
    data: result,
  });
});

export const ApplicationController = {
  addApplication,
};
