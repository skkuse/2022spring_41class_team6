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
      chapter:{
        type: DataTypes.STRING,
        allowNull: true,
      },
      problem:{
        type: DataTypes.TEXT,
        allowNull: true,
      },
      answer:{
        type: DataTypes.TEXT,
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
  problem.associate = models => {
    /**
    * Users안에 있는 "id값"을 "user_id라는 컬럼 이름"으로 UserInfo모델에 새로운 컬럼으로 추가한다.
    */
    problem.hasMany(models.UserProblemSet, {foreignKey: "problem_id", sourceKey: 'id'});
  };

  return problem;
};
