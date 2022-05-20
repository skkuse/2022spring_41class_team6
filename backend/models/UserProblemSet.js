module.exports = function (sequelize, DataTypes) {
    // 계좌
    let userProblemSet = sequelize.define(
      "UserProblemSet",
      {
        // PK_AutoIncrement
        id: {
          type: DataTypes.BIGINT,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        // It must be Y or N
        is_solved:{
            type: DataTypes.ENUM,
            values: ["Y", "N"],
            defaultValue: 'N',
        },
    },
      {
        tableName: "UserProblemSet",
        timestamp: true,
        charset: "utf8",
        underscored: true,
      }
    );

    userProblemSet.associate = function (models) {
        userProblemSet.belongsTo(models.User, {
          foreignKey: {
            name: 'id'
          },
          as:'user',
        });
        userProblemSet.belongsTo(models.Problem, {
          foreignKey: {
            name: 'id'
          },
          as:'problem'
        });
    }
  
    return userProblemSet;
  };
  