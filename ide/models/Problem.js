module.exports = function (sequelize, DataTypes) {
    // 계좌
    let problem = sequelize.define(
      "Problem",
      {
        // PK_AutoIncrement
        id: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        problem:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        answer:{
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
      {
        tableName: "Problem",
        timestamp: true,
        charset: "utf8",
        underscored: true,
      }
    );
  
    return problem;
  };
  