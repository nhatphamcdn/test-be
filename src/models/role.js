'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      const {
        user,
        permission,
        rolePermission
      } = models;
      role.hasMany(user);
      role.belongsToMany(permission, {
        through: rolePermission
      });
    }
  };

  role.init({
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    slug: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'role',
  });

  return role;
};