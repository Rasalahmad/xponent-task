import express from 'express';
import { ApplicationRoutes } from '../modules/application/application.route.js';
import { JobPostRoutes } from '../modules/jobPost/jobPost.route.js';
import { UserRoutes } from '../modules/auth/auth.route.js';

const routes = express.Router();

const moduleRoutes = [
  {
    path: '/user',
    routes: UserRoutes,
  },
  {
    path: '/application',
    routes: ApplicationRoutes,
  },
  {
    path: '/job',
    routes: JobPostRoutes,
  },
];

moduleRoutes.forEach(route => routes.use(route.path, route.routes));
export default routes;
