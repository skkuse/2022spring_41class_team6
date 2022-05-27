module.exports = function (sequelize, DataTypes) {
  // 계좌
  let userSaveCode = sequelize.define(
    "UserSaveCode",
    {
      // PK_AutoIncrement
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      // It must be Y or N
      code:{
        type: DataTypes.TEXT,
        allowNull: true
      },
    },
    {
      tableName: "UserSaveCode",
      timestamp: true,
      charset: "utf8",
      underscored: true,
    }
  )
  userSaveCode.associate = models => {
    userSaveCode.belongsTo(models.User, {foreignKey: "user_id", sourceKey: "id"});
    userSaveCode.belongsTo(models.Problem, {foreignKey: "problem_id", sourceKey: "id"});
  };

  return userSaveCode;
};
