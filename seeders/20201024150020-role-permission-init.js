'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const rolePermissions = [
      {
        roleId: 3,
        permissionId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        roleId: 3,
        permissionId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        roleId: 4,
        permissionId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        roleId: 4,
        permissionId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        roleId: 4,
        permissionId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        roleId: 4,
        permissionId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        roleId: 2,
        permissionId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ];

    return queryInterface.bulkInsert('rolepermissions', rolePermissions, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('rolepermissions', null, {});
  }
};
