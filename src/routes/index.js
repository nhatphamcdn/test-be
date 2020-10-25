import {
  Router
} from 'express';
import user from './user';
import auth from './auth';
import certificate from './certificate';
import course from './course';
import company from './company';

// guaranteed to get dependencies
export default () => {
  const app = Router();
  user(app);
  auth(app);
  certificate(app);
  course(app);
  company(app);

  return app
}