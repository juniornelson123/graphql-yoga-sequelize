'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    avatar: DataTypes.STRING,
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: [6,20]
      }
    },
    status: {
      type: DataTypes.ENUM,
      values: ['pending', 'active', 'disable', 'inactive', 'deleted']
      //disable - user disable
      //inactive - admin disable
    }
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Band, {
      foreignKey: 'user_id'
    })
  };
  return User;
};