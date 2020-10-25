import catchAsync from '../helpers/catchAsync.helper';

/**
 * Attach user to req.currentUser
 * @param {*} req Express req Object
 * @param {*} res  Express res Object
 * @param {*} next  Express next Function
 */
const roleAllow = role => catchAsync(async (req, res, next) => {
  const currentUser = req.currentUser;
  const currentRole = currentUser.role.slug;
  if (currentRole !== role) {
    return res.sendStatus(403);
  }
  return next();
});

export default roleAllow;