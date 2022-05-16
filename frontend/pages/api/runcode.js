var execSync = require('child_process').execSync;
var fs = require('fs');

export default (req, res) => {
  if (req.method === "POST") {
    let code = req.body.code;
    let input = req.body.input;
    const dir = "code/id/"
    if (!fs.existsSync(dir)) {
    	fs.mkdirSync(dir, {
    		recursive: true
    	});
    }
    fs.writeFile(dir + "input.txt", input, (err) => {
      if (err) throw err;
    })
    fs.writeFile(dir + "main.py", code, (err) => {
      var output;
      try {
        let options = {stdio : 'pipe' };
        output = execSync('docker run --rm=True -v $(pwd)/'+dir+':/home/ -w /home/ --name compiler python:3.10 bash -c "python main.py < input.txt"', options).toString();
      } catch (err) {
        output = err.stderr.toString();
      }
      res.send(output);
    });
  }
}
