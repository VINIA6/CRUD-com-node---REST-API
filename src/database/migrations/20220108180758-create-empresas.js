'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.queryInterface('empresas', {
        id:{
          type: Sequelize.INTEGER,
          alloeNull:false,
          autoIncrement: true,
          primarykey:true
        },
        name:{
          type: Sequelize.STRING,
          alloeNull:false
        },
        site:{
          type: Sequelize.SRING,
          alloeNull:false,
          unique:true
        },
        created_at:{
          type:Sequelize.DATE,
          allowNull:false
        },
        update_at:{
          type:Sequelize.DATE,
          allowNull:false
        }
    })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
