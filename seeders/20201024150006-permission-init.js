'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const permissions = [
      {
        name: 'Take test',
        slug: 'take-test',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Manage certificate',
        slug: 'manage-certificate',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Manage course',
        slug: 'manage-course',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Manage company',
        slug: 'manage-company',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Manage users',
        slug: 'manage-user',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ];

    return queryInterface.bulkInsert('permissions', permissions, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('permissions', null, {});
  }
};
