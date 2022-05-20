module.exports = function (sequelize, DataTypes) {
    
    let tutorial = sequelize.define(
      "Tutorial",
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
        title:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        content:{
            type: DataTypes.STRING,
            allowNull: true,
        }
    },
      {
        tableName: "Tutorial",
        timestamp: true,
        charset: "utf8",
        underscored: true,
      }
    );
  
    return tutorial;
  };
  