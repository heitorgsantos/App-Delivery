'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Users', 
      [
        {
          id: 1,
          name: 'Delivery App Admin',
          email: 'adm@deliveryapp.com',
          password: 'a4c86edecc5aee06eff8fdeda69e0d04',
          role: 'administrator',
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          id: 2,
          name: 'Fulana Pereira',
          email: 'fulana@deliveryapp.com',
          password: '3c28d2b0881bf46457a853e0b07531c64',
          role: 'seller',
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          id: 3,
          name: 'Cliente Zé Birita',
          email: 'zebirita@email.com',
          password: '3c28d2b0881bf46457a853e0b07531c64',
          role: 'customer',
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        
      ] 
    )
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('Users', null, {});
    
  }
};
