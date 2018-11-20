'use strict';
module.exports = (sequelize, DataTypes) => {
  const CategoryStudios = sequelize.define('CategoryStudios', {
    category_id: DataTypes.INTEGER,
    studio_id: DataTypes.INTEGER
  }, {});
  CategoryStudios.associate = function(models) {
    // associations can be defined here
  };
  return CategoryStudios;
};