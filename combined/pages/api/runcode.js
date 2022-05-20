var execSync = require('child_process').execSync;

export default (req, res) => {
  if (req.method === "POST") {
    let code = req.body.code;
    let input = req.body.input;
    let id = 0;

    var output = "";
    try {
      let options = {timeout : 10000};
      output = execSync(`docker run --rm=True --name executor_${id} python:3.10 \
        bash -c "echo '${code}' > main.py && echo '${input}' > input.txt && \
        python main.py < input.txt"`, options);
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
          output = err.stderr.toString();
          break;
      }
    }
    res.send(output);
  }
}
