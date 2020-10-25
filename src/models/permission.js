'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class permission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      const {
        role,
        rolePermission
      } = models;
      permission.belongsToMany(role, {
        through: rolePermission
      });
    }
  };

  permission.init({
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    slug: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'permission',
  });

  return permission;
};