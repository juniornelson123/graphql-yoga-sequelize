'use strict';
module.exports = (sequelize, DataTypes) => {
  const Week = sequelize.define('Week', {
    day: DataTypes.STRING
  }, {});
  Week.associate = function(models) {
    // associations can be defined here
  };
  return Week;
};