let models = require("./models/index.js");

models.sequelize
// .sync({ force: true })
.sync()
.then(() => {
  console.log(" DB 연결 성공");
})
.catch(err => {
  console.log("연결 실패");
  console.log("error in sync DB Models " + err);
});

module.exports = models;
