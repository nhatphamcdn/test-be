import {
  Router
} from 'express';
import middlewares from '../middlewares';
const route = Router();

export default (app) => {
  app.use('/courses', route);

  route.get('/', middlewares.verifyAccessToken, middlewares.attachCurrentUser, middlewares.checkPermission([
    'manage-course',
  ]), (req, res, next) => {
    return res.status(200).json({
      user: req.currentUser,
      type: 'course request'
    });
  });
};