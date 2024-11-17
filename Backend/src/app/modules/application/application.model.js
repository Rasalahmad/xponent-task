import { Schema, model } from 'mongoose';

const applicationSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    linkedin: { type: String, required: true },
    github: { type: String, required: false },
    twitter: { type: String, required: false },
    coverLetter: { type: String, required: true },
    resume: { type: String },
    jobQuestions: { type: [String], required: false },
    status: {
      type: String,
      enum: ['Applied', 'Shortlisted', 'Rejected'],
      default: 'Applied',
    },
  },
  {
    timestamps: true,
  }
);

export const Application = model('Application', applicationSchema);
