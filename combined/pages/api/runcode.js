var execSync = require('child_process').execSync;
var fs = require('fs');

export default (req, res) => {
  if (req.method === "POST") {
    let code = req.body.code;
    let input = req.body.input;
    let pid = req.body.pid;
    let id = 0;
    const dir = `code/${id}/`;
    if (!fs.existsSync(dir)) {
    	fs.mkdirSync(dir, {
    		recursive: true,
        mode: 511
    	});
    }
    fs.writeFile(dir + "input.txt", input, (err) => {
      if (err) throw err;
    })
    fs.writeFile(dir + "main.py", code, (err) => {
      var output = "";
      try {
        let options = {timeout : 10000,  };
        output = execSync(`docker run --rm=True -v $(pwd)/${dir}:/app/ -w /app/ --name executor_${id} python:3.10 bash -c "python main.py < input.txt"`, options).toString();
      } catch (err) {
        switch(err.code) {
          case "ETIMEDOUT":
            output = "Execution timeout"
            execSync(`docker stop executor_${id}`);
            break;
          case "ENOBUFS":
            output = "Output Size is too large"
            break;
          default:
            var errs = err.stderr.toString().split("\n");
            if (errs[0].includes('WARNING: Error loading config file: ')){
              output = errs.slice(1,-1).join("\n");
            }
            else {
              output = errs.join("\n");
            }
        }
      }
      res.send(output);
    });
  }
}
