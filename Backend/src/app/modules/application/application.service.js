import { Application } from './application.model.js';

const addApplication = async payload => {
  const result = await Application.create(payload);
  return result;
};

export const ApplicationService = {
  addApplication,
};
