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
exports.id = "pages/api/stream";
exports.ids = ["pages/api/stream"];
exports.modules = {

/***/ "(api)/./pages/api/stream.ts":
/*!*****************************!*\
  !*** ./pages/api/stream.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nfunction handler(req, res) {\n    res.writeHead(200, {\n        Connection: \"keep-alive\",\n        \"Content-Type\": \"text/event-stream\",\n        \"Cache-Control\": \"no-cache\"\n    });\n    let id = 0;\n    const iv = setInterval(()=>{\n        id++;\n        const data = JSON.stringify({\n            id,\n            text: \"Realtime update #\" + id,\n            time: new Date().toISOString()\n        });\n        res.write(`id: ${id}\\n`);\n        res.write(`data: ${data}\\n\\n`);\n        if (id >= 20) {\n            clearInterval(iv);\n            res.end();\n        }\n    }, 3000);\n    req.on(\"close\", ()=>{\n        clearInterval(iv);\n        res.end();\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3RyZWFtLnRzIiwibWFwcGluZ3MiOiI7Ozs7QUFFZSxTQUFTQSxRQUFRQyxHQUFtQixFQUFFQyxHQUFvQjtJQUN2RUEsSUFBSUMsU0FBUyxDQUFDLEtBQUs7UUFDakJDLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsaUJBQWlCO0lBQ25CO0lBQ0EsSUFBSUMsS0FBSztJQUNULE1BQU1DLEtBQUtDLFlBQVk7UUFDckJGO1FBQ0EsTUFBTUcsT0FBT0MsS0FBS0MsU0FBUyxDQUFDO1lBQUVMO1lBQUlNLE1BQU0sc0JBQXNCTjtZQUFJTyxNQUFNLElBQUlDLE9BQU9DLFdBQVc7UUFBRztRQUNqR1osSUFBSWEsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFVixHQUFHLEVBQUUsQ0FBQztRQUN2QkgsSUFBSWEsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFUCxLQUFLLElBQUksQ0FBQztRQUM3QixJQUFJSCxNQUFNLElBQUk7WUFDWlcsY0FBY1Y7WUFDZEosSUFBSWUsR0FBRztRQUNUO0lBQ0YsR0FBRztJQUVIaEIsSUFBSWlCLEVBQUUsQ0FBQyxTQUFTO1FBQ2RGLGNBQWNWO1FBQ2RKLElBQUllLEdBQUc7SUFDVDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGVyc29uYWxpemVkLWRhc2hib2FyZC8uL3BhZ2VzL2FwaS9zdHJlYW0udHM/Yzc5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XG4gIHJlcy53cml0ZUhlYWQoMjAwLCB7XG4gICAgQ29ubmVjdGlvbjogJ2tlZXAtYWxpdmUnLFxuICAgICdDb250ZW50LVR5cGUnOiAndGV4dC9ldmVudC1zdHJlYW0nLFxuICAgICdDYWNoZS1Db250cm9sJzogJ25vLWNhY2hlJyxcbiAgfSlcbiAgbGV0IGlkID0gMFxuICBjb25zdCBpdiA9IHNldEludGVydmFsKCgpPT4ge1xuICAgIGlkKytcbiAgICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoeyBpZCwgdGV4dDogJ1JlYWx0aW1lIHVwZGF0ZSAjJyArIGlkLCB0aW1lOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkgfSlcbiAgICByZXMud3JpdGUoYGlkOiAke2lkfVxcbmApXG4gICAgcmVzLndyaXRlKGBkYXRhOiAke2RhdGF9XFxuXFxuYClcbiAgICBpZiAoaWQgPj0gMjApIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoaXYpXG4gICAgICByZXMuZW5kKClcbiAgICB9XG4gIH0sIDMwMDApXG5cbiAgcmVxLm9uKCdjbG9zZScsICgpID0+IHtcbiAgICBjbGVhckludGVydmFsKGl2KVxuICAgIHJlcy5lbmQoKVxuICB9KVxufVxuIl0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJ3cml0ZUhlYWQiLCJDb25uZWN0aW9uIiwiaWQiLCJpdiIsInNldEludGVydmFsIiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0ZXh0IiwidGltZSIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsIndyaXRlIiwiY2xlYXJJbnRlcnZhbCIsImVuZCIsIm9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/stream.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/stream.ts"));
module.exports = __webpack_exports__;

})();