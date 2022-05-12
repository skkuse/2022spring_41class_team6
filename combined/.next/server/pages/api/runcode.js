"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/runcode";
exports.ids = ["pages/api/runcode"];
exports.modules = {

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./pages/api/runcode.js":
/*!******************************!*\
  !*** ./pages/api/runcode.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar execSync = (__webpack_require__(/*! child_process */ \"child_process\").execSync);\nvar fs = __webpack_require__(/*! fs */ \"fs\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res)=>{\n    if (req.method === \"POST\") {\n        let code = req.body.code;\n        let input = req.body.input;\n        const dir = \"code/id/\";\n        if (!fs.existsSync(dir)) {\n            fs.mkdirSync(dir, {\n                recursive: true\n            });\n        }\n        fs.writeFile(dir + \"input.txt\", input, (err)=>{\n            if (err) throw err;\n        });\n        fs.writeFile(dir + \"main.py\", code, (err)=>{\n            var output;\n            try {\n                let options = {\n                    stdio: \"pipe\"\n                };\n                output = execSync(\"docker run --rm=True -v $(pwd)/\" + dir + ':/home/ -w /home/ --name compiler python:3.10 bash -c \"python main.py < input.txt\"', options).toString();\n            } catch (err1) {\n                output = err1.stderr.toString();\n            }\n            res.send(output);\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcnVuY29kZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsSUFBSUEsUUFBUSxHQUFHQyxvRUFBaUM7QUFDaEQsSUFBSUMsRUFBRSxHQUFHRCxtQkFBTyxDQUFDLGNBQUksQ0FBQztBQUV0QixpRUFBZSxDQUFDRSxHQUFHLEVBQUVDLEdBQUcsR0FBSztJQUMzQixJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDekIsSUFBSUMsSUFBSSxHQUFHSCxHQUFHLENBQUNJLElBQUksQ0FBQ0QsSUFBSTtRQUN4QixJQUFJRSxLQUFLLEdBQUdMLEdBQUcsQ0FBQ0ksSUFBSSxDQUFDQyxLQUFLO1FBQzFCLE1BQU1DLEdBQUcsR0FBRyxVQUFVO1FBQ3RCLElBQUksQ0FBQ1AsRUFBRSxDQUFDUSxVQUFVLENBQUNELEdBQUcsQ0FBQyxFQUFFO1lBQ3hCUCxFQUFFLENBQUNTLFNBQVMsQ0FBQ0YsR0FBRyxFQUFFO2dCQUNqQkcsU0FBUyxFQUFFLElBQUk7YUFDZixDQUFDLENBQUM7U0FDSDtRQUNEVixFQUFFLENBQUNXLFNBQVMsQ0FBQ0osR0FBRyxHQUFHLFdBQVcsRUFBRUQsS0FBSyxFQUFFLENBQUNNLEdBQUcsR0FBSztZQUM5QyxJQUFJQSxHQUFHLEVBQUUsTUFBTUEsR0FBRyxDQUFDO1NBQ3BCLENBQUM7UUFDRlosRUFBRSxDQUFDVyxTQUFTLENBQUNKLEdBQUcsR0FBRyxTQUFTLEVBQUVILElBQUksRUFBRSxDQUFDUSxHQUFHLEdBQUs7WUFDM0MsSUFBSUMsTUFBTTtZQUNWLElBQUk7Z0JBQ0YsSUFBSUMsT0FBTyxHQUFHO29CQUFDQyxLQUFLLEVBQUcsTUFBTTtpQkFBRTtnQkFDL0JGLE1BQU0sR0FBR2YsUUFBUSxDQUFDLGlDQUFpQyxHQUFDUyxHQUFHLEdBQUMsb0ZBQW9GLEVBQUVPLE9BQU8sQ0FBQyxDQUFDRSxRQUFRLEVBQUUsQ0FBQzthQUNuSyxDQUFDLE9BQU9KLElBQUcsRUFBRTtnQkFDWkMsTUFBTSxHQUFHRCxJQUFHLENBQUNLLE1BQU0sQ0FBQ0QsUUFBUSxFQUFFLENBQUM7YUFDaEM7WUFDRGQsR0FBRyxDQUFDZ0IsSUFBSSxDQUFDTCxNQUFNLENBQUMsQ0FBQztTQUNsQixDQUFDLENBQUM7S0FDSjtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG9pdC1uZXh0anMvLi9wYWdlcy9hcGkvcnVuY29kZS5qcz8zYTVkIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBleGVjU3luYyA9IHJlcXVpcmUoJ2NoaWxkX3Byb2Nlc3MnKS5leGVjU3luYztcclxudmFyIGZzID0gcmVxdWlyZSgnZnMnKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChyZXEsIHJlcykgPT4ge1xyXG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xyXG4gICAgbGV0IGNvZGUgPSByZXEuYm9keS5jb2RlO1xyXG4gICAgbGV0IGlucHV0ID0gcmVxLmJvZHkuaW5wdXQ7XHJcbiAgICBjb25zdCBkaXIgPSBcImNvZGUvaWQvXCJcclxuICAgIGlmICghZnMuZXhpc3RzU3luYyhkaXIpKSB7XHJcbiAgICBcdGZzLm1rZGlyU3luYyhkaXIsIHtcclxuICAgIFx0XHRyZWN1cnNpdmU6IHRydWVcclxuICAgIFx0fSk7XHJcbiAgICB9XHJcbiAgICBmcy53cml0ZUZpbGUoZGlyICsgXCJpbnB1dC50eHRcIiwgaW5wdXQsIChlcnIpID0+IHtcclxuICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xyXG4gICAgfSlcclxuICAgIGZzLndyaXRlRmlsZShkaXIgKyBcIm1haW4ucHlcIiwgY29kZSwgKGVycikgPT4ge1xyXG4gICAgICB2YXIgb3V0cHV0O1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGxldCBvcHRpb25zID0ge3N0ZGlvIDogJ3BpcGUnIH07XHJcbiAgICAgICAgb3V0cHV0ID0gZXhlY1N5bmMoJ2RvY2tlciBydW4gLS1ybT1UcnVlIC12ICQocHdkKS8nK2RpcisnOi9ob21lLyAtdyAvaG9tZS8gLS1uYW1lIGNvbXBpbGVyIHB5dGhvbjozLjEwIGJhc2ggLWMgXCJweXRob24gbWFpbi5weSA8IGlucHV0LnR4dFwiJywgb3B0aW9ucykudG9TdHJpbmcoKTtcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgb3V0cHV0ID0gZXJyLnN0ZGVyci50b1N0cmluZygpO1xyXG4gICAgICB9XHJcbiAgICAgIHJlcy5zZW5kKG91dHB1dCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImV4ZWNTeW5jIiwicmVxdWlyZSIsImZzIiwicmVxIiwicmVzIiwibWV0aG9kIiwiY29kZSIsImJvZHkiLCJpbnB1dCIsImRpciIsImV4aXN0c1N5bmMiLCJta2RpclN5bmMiLCJyZWN1cnNpdmUiLCJ3cml0ZUZpbGUiLCJlcnIiLCJvdXRwdXQiLCJvcHRpb25zIiwic3RkaW8iLCJ0b1N0cmluZyIsInN0ZGVyciIsInNlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/runcode.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/runcode.js"));
module.exports = __webpack_exports__;

})();