import {
  Router
} from 'express';
import middlewares from '../middlewares';
const route = Router();

export default (app) => {
  app.use('/companies', route);

  route.get('/', middlewares.verifyAccessToken, middlewares.attachCurrentUser, middlewares.checkPermission([
    'manage-company',
  ]), (req, res, next) => {
    return res.status(200).json({
      user: req.currentUser,
      type: 'company request'
    });
  });
};