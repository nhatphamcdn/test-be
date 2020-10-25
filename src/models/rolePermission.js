'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rolePermission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      const {
        role,
        permission
      } = models;
      rolePermission.belongsTo(role);

      rolePermission.belongsTo(permission);
    }
  };
  rolePermission.init({
    roleId: {
      type: DataTypes.INTEGER,
    },
    permissionId: {
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'rolePermission',
  });
  return rolePermission;
};