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
  // user.hasMany(models.UserProblemSet);

  user.associate = models => {
    /**
    * Users안에 있는 "id값"을 "user_id라는 컬럼 이름"으로 UserInfo모델에 새로운 컬럼으로 추가한다.
    */
    user.hasMany(models.UserProblemSet, {foreignKey: "user_id", sourceKey: 'id'});
  };

  return user;
};
