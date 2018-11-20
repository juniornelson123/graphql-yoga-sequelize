'use strict';
module.exports = (sequelize, DataTypes) => {
  const CategoryBands = sequelize.define('CategoryBands', {
    category_id: DataTypes.INTEGER,
    band_id: DataTypes.INTEGER
  }, {});
  CategoryBands.associate = function(models) {
    // associations can be defined here
  };
  return CategoryBands;
};