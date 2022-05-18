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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar execSync = (__webpack_require__(/*! child_process */ \"child_process\").execSync);\nvar fs = __webpack_require__(/*! fs */ \"fs\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res)=>{\n    if (req.method === \"POST\") {\n        let code = req.body.code;\n        let input = req.body.input;\n        let id = 0;\n        const dir = `code/${id}/`;\n        if (!fs.existsSync(dir)) {\n            fs.mkdirSync(dir, {\n                recursive: true,\n                mode: 511\n            });\n        }\n        fs.writeFile(dir + \"input.txt\", input, (err)=>{\n            if (err) throw err;\n        });\n        fs.writeFile(dir + \"main.py\", code, (err)=>{\n            var output = \"\";\n            try {\n                let options = {\n                    timeout: 10000\n                };\n                output = execSync(`docker run --rm=True -v $(pwd)/${dir}:/app/ -w /app/ --name executor_${id} python:3.10 bash -c \"python main.py < input.txt\"`, options).toString();\n            } catch (err1) {\n                switch(err1.code){\n                    case \"ETIMEDOUT\":\n                        output = \"Execution timeout\";\n                        execSync(`docker stop executor_${id}`);\n                        break;\n                    case \"ENOBUFS\":\n                        output = \"Output Size is too large\";\n                        break;\n                    default:\n                        var errs = err1.stderr.toString().split(\"\\n\");\n                        if (errs[0].includes(\"WARNING: Error loading config file: \")) {\n                            output = errs.slice(1, -1).join(\"\\n\");\n                        } else {\n                            output = errs.join(\"\\n\");\n                        }\n                }\n            }\n            res.send(output);\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcnVuY29kZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsSUFBSUEsUUFBUSxHQUFHQyxvRUFBaUM7QUFDaEQsSUFBSUMsRUFBRSxHQUFHRCxtQkFBTyxDQUFDLGNBQUksQ0FBQztBQUV0QixpRUFBZSxDQUFDRSxHQUFHLEVBQUVDLEdBQUcsR0FBSztJQUMzQixJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDekIsSUFBSUMsSUFBSSxHQUFHSCxHQUFHLENBQUNJLElBQUksQ0FBQ0QsSUFBSTtRQUN4QixJQUFJRSxLQUFLLEdBQUdMLEdBQUcsQ0FBQ0ksSUFBSSxDQUFDQyxLQUFLO1FBQzFCLElBQUlDLEVBQUUsR0FBRyxDQUFDO1FBQ1YsTUFBTUMsR0FBRyxHQUFHLENBQUMsS0FBSyxFQUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQ1AsRUFBRSxDQUFDUyxVQUFVLENBQUNELEdBQUcsQ0FBQyxFQUFFO1lBQ3hCUixFQUFFLENBQUNVLFNBQVMsQ0FBQ0YsR0FBRyxFQUFFO2dCQUNqQkcsU0FBUyxFQUFFLElBQUk7Z0JBQ2JDLElBQUksRUFBRSxHQUFHO2FBQ1gsQ0FBQyxDQUFDO1NBQ0g7UUFDRFosRUFBRSxDQUFDYSxTQUFTLENBQUNMLEdBQUcsR0FBRyxXQUFXLEVBQUVGLEtBQUssRUFBRSxDQUFDUSxHQUFHLEdBQUs7WUFDOUMsSUFBSUEsR0FBRyxFQUFFLE1BQU1BLEdBQUcsQ0FBQztTQUNwQixDQUFDO1FBQ0ZkLEVBQUUsQ0FBQ2EsU0FBUyxDQUFDTCxHQUFHLEdBQUcsU0FBUyxFQUFFSixJQUFJLEVBQUUsQ0FBQ1UsR0FBRyxHQUFLO1lBQzNDLElBQUlDLE1BQU0sR0FBRyxFQUFFO1lBQ2YsSUFBSTtnQkFDRixJQUFJQyxPQUFPLEdBQUc7b0JBQUNDLE9BQU8sRUFBRyxLQUFLO2lCQUFJO2dCQUNsQ0YsTUFBTSxHQUFHakIsUUFBUSxDQUFDLENBQUMsK0JBQStCLEVBQUVVLEdBQUcsQ0FBQyxnQ0FBZ0MsRUFBRUQsRUFBRSxDQUFDLGlEQUFpRCxDQUFDLEVBQUVTLE9BQU8sQ0FBQyxDQUFDRSxRQUFRLEVBQUUsQ0FBQzthQUN0SyxDQUFDLE9BQU9KLElBQUcsRUFBRTtnQkFDWixPQUFPQSxJQUFHLENBQUNWLElBQUk7b0JBQ2IsS0FBSyxXQUFXO3dCQUNkVyxNQUFNLEdBQUcsbUJBQW1CO3dCQUM1QmpCLFFBQVEsQ0FBQyxDQUFDLHFCQUFxQixFQUFFUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3ZDLE1BQU07b0JBQ1IsS0FBSyxTQUFTO3dCQUNaUSxNQUFNLEdBQUcsMEJBQTBCO3dCQUNuQyxNQUFNO29CQUNSO3dCQUNFLElBQUlJLElBQUksR0FBR0wsSUFBRyxDQUFDTSxNQUFNLENBQUNGLFFBQVEsRUFBRSxDQUFDRyxLQUFLLENBQUMsSUFBSSxDQUFDO3dCQUM1QyxJQUFJRixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNHLFFBQVEsQ0FBQyxzQ0FBc0MsQ0FBQyxFQUFDOzRCQUMzRFAsTUFBTSxHQUFHSSxJQUFJLENBQUNJLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3lCQUN0QyxNQUNJOzRCQUNIVCxNQUFNLEdBQUdJLElBQUksQ0FBQ0ssSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3lCQUMxQjtpQkFDSjthQUNGO1lBQ0R0QixHQUFHLENBQUN1QixJQUFJLENBQUNWLE1BQU0sQ0FBQyxDQUFDO1NBQ2xCLENBQUMsQ0FBQztLQUNKO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb2l0LW5leHRqcy8uL3BhZ2VzL2FwaS9ydW5jb2RlLmpzPzNhNWQiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGV4ZWNTeW5jID0gcmVxdWlyZSgnY2hpbGRfcHJvY2VzcycpLmV4ZWNTeW5jO1xyXG52YXIgZnMgPSByZXF1aXJlKCdmcycpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHJlcSwgcmVzKSA9PiB7XHJcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XHJcbiAgICBsZXQgY29kZSA9IHJlcS5ib2R5LmNvZGU7XHJcbiAgICBsZXQgaW5wdXQgPSByZXEuYm9keS5pbnB1dDtcclxuICAgIGxldCBpZCA9IDA7XHJcbiAgICBjb25zdCBkaXIgPSBgY29kZS8ke2lkfS9gO1xyXG4gICAgaWYgKCFmcy5leGlzdHNTeW5jKGRpcikpIHtcclxuICAgIFx0ZnMubWtkaXJTeW5jKGRpciwge1xyXG4gICAgXHRcdHJlY3Vyc2l2ZTogdHJ1ZSxcclxuICAgICAgICBtb2RlOiA1MTFcclxuICAgIFx0fSk7XHJcbiAgICB9XHJcbiAgICBmcy53cml0ZUZpbGUoZGlyICsgXCJpbnB1dC50eHRcIiwgaW5wdXQsIChlcnIpID0+IHtcclxuICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xyXG4gICAgfSlcclxuICAgIGZzLndyaXRlRmlsZShkaXIgKyBcIm1haW4ucHlcIiwgY29kZSwgKGVycikgPT4ge1xyXG4gICAgICB2YXIgb3V0cHV0ID0gXCJcIjtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHt0aW1lb3V0IDogMTAwMDAsICB9O1xyXG4gICAgICAgIG91dHB1dCA9IGV4ZWNTeW5jKGBkb2NrZXIgcnVuIC0tcm09VHJ1ZSAtdiAkKHB3ZCkvJHtkaXJ9Oi9hcHAvIC13IC9hcHAvIC0tbmFtZSBleGVjdXRvcl8ke2lkfSBweXRob246My4xMCBiYXNoIC1jIFwicHl0aG9uIG1haW4ucHkgPCBpbnB1dC50eHRcImAsIG9wdGlvbnMpLnRvU3RyaW5nKCk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHN3aXRjaChlcnIuY29kZSkge1xyXG4gICAgICAgICAgY2FzZSBcIkVUSU1FRE9VVFwiOlxyXG4gICAgICAgICAgICBvdXRwdXQgPSBcIkV4ZWN1dGlvbiB0aW1lb3V0XCJcclxuICAgICAgICAgICAgZXhlY1N5bmMoYGRvY2tlciBzdG9wIGV4ZWN1dG9yXyR7aWR9YCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBcIkVOT0JVRlNcIjpcclxuICAgICAgICAgICAgb3V0cHV0ID0gXCJPdXRwdXQgU2l6ZSBpcyB0b28gbGFyZ2VcIlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHZhciBlcnJzID0gZXJyLnN0ZGVyci50b1N0cmluZygpLnNwbGl0KFwiXFxuXCIpO1xyXG4gICAgICAgICAgICBpZiAoZXJyc1swXS5pbmNsdWRlcygnV0FSTklORzogRXJyb3IgbG9hZGluZyBjb25maWcgZmlsZTogJykpe1xyXG4gICAgICAgICAgICAgIG91dHB1dCA9IGVycnMuc2xpY2UoMSwtMSkuam9pbihcIlxcblwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICBvdXRwdXQgPSBlcnJzLmpvaW4oXCJcXG5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmVzLnNlbmQob3V0cHV0KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiZXhlY1N5bmMiLCJyZXF1aXJlIiwiZnMiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJjb2RlIiwiYm9keSIsImlucHV0IiwiaWQiLCJkaXIiLCJleGlzdHNTeW5jIiwibWtkaXJTeW5jIiwicmVjdXJzaXZlIiwibW9kZSIsIndyaXRlRmlsZSIsImVyciIsIm91dHB1dCIsIm9wdGlvbnMiLCJ0aW1lb3V0IiwidG9TdHJpbmciLCJlcnJzIiwic3RkZXJyIiwic3BsaXQiLCJpbmNsdWRlcyIsInNsaWNlIiwiam9pbiIsInNlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/runcode.js\n");

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