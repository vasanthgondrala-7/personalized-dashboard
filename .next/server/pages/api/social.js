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
exports.id = "pages/api/social";
exports.ids = ["pages/api/social"];
exports.modules = {

/***/ "(api)/./pages/api/social.ts":
/*!*****************************!*\
  !*** ./pages/api/social.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst sample = {\n    posts: Array.from({\n        length: 5\n    }).map((_, i)=>({\n            id: i + 200,\n            user: \"user\" + (i + 1),\n            text: \"This is a sample social post number \" + (i + 1),\n            image: \"https://picsum.photos/seed/social\" + (i + 1) + \"/300/200\"\n        }))\n};\nfunction handler(req, res) {\n    res.status(200).json(sample);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc29jaWFsLnRzIiwibWFwcGluZ3MiOiI7Ozs7QUFDQSxNQUFNQSxTQUFTO0lBQ2JDLE9BQU9DLE1BQU1DLElBQUksQ0FBQztRQUFDQyxRQUFPO0lBQUMsR0FBR0MsR0FBRyxDQUFDLENBQUNDLEdBQUVDLElBQUs7WUFDeENDLElBQUlELElBQUU7WUFDTkUsTUFBTSxTQUFRRixDQUFBQSxJQUFFO1lBQ2hCRyxNQUFNLHlDQUF3Q0gsQ0FBQUEsSUFBRTtZQUNoREksT0FBTyxzQ0FBcUNKLENBQUFBLElBQUUsS0FBRztRQUNuRDtBQUNGO0FBQ2UsU0FBU0ssUUFBUUMsR0FBbUIsRUFBRUMsR0FBb0I7SUFDdkVBLElBQUlDLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNoQjtBQUN2QiIsInNvdXJjZXMiOlsid2VicGFjazovL3BlcnNvbmFsaXplZC1kYXNoYm9hcmQvLi9wYWdlcy9hcGkvc29jaWFsLnRzP2FmZTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcbmNvbnN0IHNhbXBsZSA9IHtcbiAgcG9zdHM6IEFycmF5LmZyb20oe2xlbmd0aDo1fSkubWFwKChfLGkpPT4oe1xuICAgIGlkOiBpKzIwMCxcbiAgICB1c2VyOiAndXNlcicrKGkrMSksXG4gICAgdGV4dDogJ1RoaXMgaXMgYSBzYW1wbGUgc29jaWFsIHBvc3QgbnVtYmVyICcrKGkrMSksXG4gICAgaW1hZ2U6ICdodHRwczovL3BpY3N1bS5waG90b3Mvc2VlZC9zb2NpYWwnKyhpKzEpKycvMzAwLzIwMCdcbiAgfSkpXG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHNhbXBsZSlcbn1cbiJdLCJuYW1lcyI6WyJzYW1wbGUiLCJwb3N0cyIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsIm1hcCIsIl8iLCJpIiwiaWQiLCJ1c2VyIiwidGV4dCIsImltYWdlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/social.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/social.ts"));
module.exports = __webpack_exports__;

})();