'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const roles = [
      {
        name: 'Members',
        slug: 'members',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Staff',
        slug: 'staff',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Admin',
        slug: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Super admin',
        slug: 'super-admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ];

    return queryInterface.bulkInsert('roles', roles, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('roles', null, {});
  }
};
