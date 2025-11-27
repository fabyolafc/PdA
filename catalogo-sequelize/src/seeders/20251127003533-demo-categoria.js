'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('categorias', [{
        nome: 'Tecnologia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Administração',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Engenharia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Humanas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Saúde',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categorias', null, {});
  }
};
