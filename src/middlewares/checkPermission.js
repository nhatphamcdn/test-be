import catchAsync from '../helpers/catchAsync.helper';
import UserService from '../services/user.service'

// Create instance userSerivce
const userService = new UserService();

/**
 * Attach user to req.currentUser
 * @param {*} req Express req Object
 * @param {*} res  Express res Object
 * @param {*} next  Express next Function
 */
const checkPermission = permissions => catchAsync(async (req, res, next) => {
  const currentUser = req.currentUser;
  let userPermissions = currentUser.role.permissions;
  if (!userPermissions.length) {
    return res.sendStatus(403);
  }

  userPermissions = userPermissions.map(permission => permission.slug);
  // !TODO user co 1 trong nhung quyen trong list permissions truyen vao thi pass
  // const hasPermission = userPermissions.some(function (required) {
  //   return [required].every(function (permission) {
  //     return permissions.indexOf(permission) !== -1
  //   })
  // })
  // if (!hasPermission) {
  //   return res.sendStatus(403);
  // }

  const intersection = userPermissions.filter(permission => permissions.includes(permission));
  // !TODO user phai co du tat ca cac quyen trong list permissions truyen vao thi ms dc pass
  if (!intersection || intersection.length < permissions.length) {
    return res.sendStatus(403);
  }
  
  return next();
});

export default checkPermission;