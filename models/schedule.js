'use strict';
module.exports = (sequelize, DataTypes) => {
  const Schedule = sequelize.define('Schedule', {
    scheduleable: DataTypes.STRING,
    scheduleable_id: DataTypes.INTEGER
  }, {});
  Schedule.associate = function(models) {
    // associations can be defined here
  };
  return Schedule;
};