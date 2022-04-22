const express = require("express");
const serverRouter = require("./router/serverRouter")
const ideRouter = require("./router/ideRouter")
const app = express();

app.set("port", process.env.port || 3000);
app.use(express.urlencoded({ 
  limit : "50mb",
  extended: true,
  parameterLimit: 1000000
}));
app.use(express.json({
  limit : "50mb"
}));
app.use("/",serverRouter);
app.use("/ide",ideRouter);

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기중");
});
