'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const users = [
      {
        displayName: "nhat",
        email: "test1@gmail.com",
        password: "$2a$10$3oTV6C9zBu/n08bZJIn58u1tb62t8ymSwsZRJSRHumyszyN4frZmO",
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        displayName: "nhat",
        email: "test2@gmail.com",
        password: "$2a$10$3oTV6C9zBu/n08bZJIn58u1tb62t8ymSwsZRJSRHumyszyN4frZmO",
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        displayName: "nhat",
        email: "test3@gmail.com",
        password: "$2a$10$3oTV6C9zBu/n08bZJIn58u1tb62t8ymSwsZRJSRHumyszyN4frZmO",
        roleId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        displayName: "nhat",
        email: "test4@gmail.com",
        password: "$2a$10$3oTV6C9zBu/n08bZJIn58u1tb62t8ymSwsZRJSRHumyszyN4frZmO",
        roleId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        displayName: "nhat",
        email: "test5@gmail.com",
        password: "$2a$10$3oTV6C9zBu/n08bZJIn58u1tb62t8ymSwsZRJSRHumyszyN4frZmO",
        roleId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ];

    return queryInterface.bulkInsert('users', users, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
