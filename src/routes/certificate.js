import {
  Router
} from 'express';
import middlewares from '../middlewares';
const route = Router();

export default (app) => {
  app.use('/certificates', route);

  route.get('/', middlewares.verifyAccessToken, middlewares.attachCurrentUser, middlewares.checkPermission([
    'manage-certificate',
  ]), (req, res, next) => {
    return res.status(200).json({
      user: req.currentUser,
      type: 'certificates request'
    });
  });

  route.get('/add', middlewares.verifyAccessToken, middlewares.attachCurrentUser, middlewares.roleAllow('super-admin'), middlewares.checkPermission([
    'manage-certificate',
  ]), (req, res, next) => {
    return res.status(200).json({
      msg: 'Chi super admin ms dc add',
      type: 'certificates add request'
    });
  });
};