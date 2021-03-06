'use strict';
module.exports = (sequelize, DataTypes) => {
  const Studio = sequelize.define('Studio', {
    avatar: DataTypes.STRING,
    cover: DataTypes.STRING,
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    description: {
      type: DataTypes.TEXT,
      validate: {
        notEmpty: true
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
    
    },
    value: DataTypes.FLOAT,
    status: {
      type: DataTypes.ENUM,
      values: ['pending', 'active', 'disable', 'inactive', 'deleted']
      //disable - user disable
      //inactive - admin disable
    }
  }, {});
  Studio.associate = function(models) {
    // associations can be defined here
  };
  return Studio;
};