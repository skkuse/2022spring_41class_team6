var express = require('express');
var app = express();
var router = require('./router/index');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
var execSync = require('child_process').execSync;
var fs = require('fs');

app.listen(3000, function () {
    console.log("start!! express server on port 3000")
});

app.use(express.static('public'))
app.use(express.static('node_modules'))
app.set('view engine', 'ejs')
app.use(router)

router.post("/api/runcode", (req, res) => {
  let code = req.body.code;
  let input = req.body.input;
  fs.writeFile("code/input.txt", input, (err) => {
    if (err) throw err;
  })
  fs.writeFile("code/main.py", code, (err) => {
    var output;
    try {
      let options = {stdio : 'pipe' };
      output = execSync('sudo docker run --rm=True -v $(pwd)/code/:/home/ -w /home/ --name compiler python:3.10 bash -c "python main.py < input.txt"', options).toString();
    } catch (err) {
      output = err.stderr.toString();
    }
    res.send(output);
  });
});
