const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/main.html"));
})

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
        output = execSync('docker run --rm=True -v $(pwd)/code/:/home/ -w /home/ --name compiler python:3.10 bash -c "python main.py < input.txt"', options).toString();
      } catch (err) {
        output = err.stderr.toString();
      }
      res.send(output);
    });
  });
  

module.exports = router;