'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Movie.belongsToMany(models.User, {through: 'Watchlist'})
    }
  }
  Movie.init({
    title: DataTypes.STRING,
    original_language: DataTypes.STRING,
    release_date: DataTypes.DATE,
    poster_path: DataTypes.STRING,
    backdrop_path: DataTypes.STRING,
    vote_count: DataTypes.INTEGER,
    vote_average: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};