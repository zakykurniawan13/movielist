'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      original_language: {
        type: Sequelize.STRING
      },
      release_date: {
        type: Sequelize.DATE
      },
      poster_path: {
        type: Sequelize.STRING
      },
      backdrop_path: {
        type: Sequelize.STRING
      },
      vote_count: {
        type: Sequelize.INTEGER
      },
      vote_average: {
        type: Sequelize.DOUBLE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Movies');
  }
};