'use strict';
const {
  Model
} = require('sequelize');

import bcrypt from 'bcryptjs';

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      const {
        role
      } = models;
      user.belongsTo(role);
    }
  };
  user.init({
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    roleId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user',
  });

  // Hook before create user call bcrypt password
  user.beforeCreate(user => {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });

  return user;
};