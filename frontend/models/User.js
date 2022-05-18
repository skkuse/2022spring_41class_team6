module.exports = function (sequelize, DataTypes) {
    // 계좌
    let user = sequelize.define(
      "User",
      {
        // PK_AutoIncrement
        id: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        email:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        password:{
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
      {
        tableName: "User",
        timestamp: true,
        charset: "utf8",
        underscored: true,
      }
    );
  
    return user;
  };
  