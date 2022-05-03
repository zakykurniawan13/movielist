'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:     */
    await queryInterface.bulkInsert('Users', [{
      name: 'Bayu Aji',
      username: 'baayuaji__',
      email: 'bayuapamungkas@yahoo.com',
      password: 'bayu123',
      avatar_path: 'bayu.jpg',
      backdrop_path: 'bayu_background.jpg',
      createdAt: new Date(),
      updatedAt: new Date()

    }], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('User', null, {});
  }
};
