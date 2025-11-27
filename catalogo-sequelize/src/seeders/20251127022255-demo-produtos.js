'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('produtos', [{
        nome: 'Notebook Lenovo',
        descricao: 'Notebook ideal para estudo e trabalho',
        preco: 3500.00,
        categoria_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Mouse Gamer RGB',
        descricao: 'Mouse com iluminação e alta precisão',
        preco: 120.00,
        categoria_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Camiseta Masculina',
        descricao: 'Camiseta básica de algodão',
        preco: 39.90,
        categoria_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Livro - Introdução à Programação',
        descricao: 'Livro ideal para iniciantes em lógica e JS',
        preco: 89.90,
        categoria_id: 3, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Cadeira Gamer',
        descricao: 'Cadeira ergonômica confortável',
        preco: 950.00,
        categoria_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});

  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('produtos', null, {});  
  }
};
