window.onload = function(){
  var editor = document.getElementById("editor");
  var ide_area = CodeMirror.fromTextArea(editor, {
    mode: "python",
    them: "leetcode",
    keyMap: "sublime",
    lineNumbers : true,
    smartIndent: true,
    indentUnit: 4,
    indentWithTabs: true,
    lineWrapping: true,
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter", "CodeMirror-lint-markers"],
    foldGutter: true,
    autofocus: true,
    matchBrackets: true,
    autoCloseBrackets: true,
    styleActiveLine: true,
  });
  var input_area = document.getElementById("input");
  var output_area = document.getElementById("output");

  var initValue = "# Please edit your code\n";
  ide_area.setOption("value", initValue);

  var button_run = document.getElementById("button_run");
  button_run.onclick = function() {
    var code = ide_area.getValue();
    var input = input_area.value;
    axios.post("/api/runcode", {
      code: code,
      input: input
    }).then(function(res) {
      let output = res["data"];
      output_area.innerText = output;
    });
  };
};
