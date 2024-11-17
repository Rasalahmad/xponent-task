import ApiError from '../../../errors/ApiError.js';
import { JobPost } from './jobPost.model.js';

const addJobPost = async payload => {
  const result = await JobPost.create(payload);
  return result;
};

const getAllJobPost = async () => {
  const result = await JobPost.find({}).sort({ createdAt: 1 });

  const total = await JobPost.countDocuments();

  return {
    meta: {
      total,
    },
    data: result,
  };
};

const updateJobPost = async (id, payload) => {
  const job = await JobPost.findById({ _id: id });

  if (!job) {
    throw new ApiError(httpStatus.NOT_FOUND, 'No job not found');
  }

  const result = await JobPost.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteJobPost = async id => {
  const notice = await JobPost.findById({ _id: id });

  if (!notice) {
    throw new ApiError(httpStatus.NOT_FOUND, 'No job not found');
  }

  const result = await JobPost.findByIdAndDelete({ _id: id });
  return result;
};

export const JobPostService = {
  addJobPost,
  getAllJobPost,
  updateJobPost,
  deleteJobPost,
};
