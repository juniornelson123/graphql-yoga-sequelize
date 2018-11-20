'use strict';
module.exports = (sequelize, DataTypes) => {
  const ScheduleWeeks = sequelize.define('ScheduleWeeks', {
    schedule_id: DataTypes.INTEGER,
    week_id: DataTypes.INTEGER,
    initTime: DataTypes.DATE,
    endTime: DataTypes.DATE
  }, {});
  ScheduleWeeks.associate = function(models) {
    // associations can be defined here
  };
  return ScheduleWeeks;
};