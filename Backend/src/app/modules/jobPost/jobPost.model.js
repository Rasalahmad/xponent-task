import { Schema, model } from 'mongoose';

const jobPostSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    questions: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

export const JobPost = model('JobPost', jobPostSchema);
