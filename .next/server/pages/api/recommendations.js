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
exports.id = "pages/api/recommendations";
exports.ids = ["pages/api/recommendations"];
exports.modules = {

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("node-fetch");

/***/ }),

/***/ "(api)/./pages/api/recommendations.ts":
/*!**************************************!*\
  !*** ./pages/api/recommendations.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ \"node-fetch\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_0__);\n\nconst sample = {\n    results: Array.from({\n        length: 6\n    }).map((_, i)=>({\n            id: i + 100,\n            title: \"Movie Title \" + (i + 1),\n            overview: \"Overview for movie \" + (i + 1),\n            poster: \"https://picsum.photos/seed/movie\" + (i + 1) + \"/200/300\"\n        }))\n};\nasync function handler(req, res) {\n    const key = process.env.TMDB_KEY;\n    if (key) {\n        try {\n            const r = await node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`);\n            const data = await r.json();\n            const results = (data.results || []).slice(0, 6).map((m)=>({\n                    id: m.id,\n                    title: m.title,\n                    overview: m.overview,\n                    poster: m.poster_path ? `https://image.tmdb.org/t/p/w300${m.poster_path}` : null\n                }));\n            return res.status(200).json({\n                results\n            });\n        } catch (e) {\n            console.error(e);\n            return res.status(200).json(sample);\n        }\n    }\n    res.status(200).json(sample);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmVjb21tZW5kYXRpb25zLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUM4QjtBQUU5QixNQUFNQyxTQUFTO0lBQ2JDLFNBQVNDLE1BQU1DLElBQUksQ0FBQztRQUFDQyxRQUFPO0lBQUMsR0FBR0MsR0FBRyxDQUFDLENBQUNDLEdBQUVDLElBQUs7WUFDMUNDLElBQUlELElBQUU7WUFDTkUsT0FBTyxpQkFBZ0JGLENBQUFBLElBQUU7WUFDekJHLFVBQVUsd0JBQXVCSCxDQUFBQSxJQUFFO1lBQ25DSSxRQUFRLHFDQUFvQ0osQ0FBQUEsSUFBRSxLQUFHO1FBQ25EO0FBQ0Y7QUFFZSxlQUFlSyxRQUFRQyxHQUFtQixFQUFFQyxHQUFvQjtJQUM3RSxNQUFNQyxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLFFBQVE7SUFDaEMsSUFBSUgsS0FBSztRQUNQLElBQUk7WUFDRixNQUFNSSxJQUFJLE1BQU1wQixpREFBS0EsQ0FBQyxDQUFDLG1EQUFtRCxFQUFFZ0IsSUFBSSxzQkFBc0IsQ0FBQztZQUN2RyxNQUFNSyxPQUFPLE1BQU1ELEVBQUVFLElBQUk7WUFDekIsTUFBTXBCLFVBQVUsQ0FBQ21CLEtBQUtuQixPQUFPLElBQUksRUFBRSxFQUFFcUIsS0FBSyxDQUFDLEdBQUUsR0FBR2pCLEdBQUcsQ0FBQyxDQUFDa0IsSUFBUztvQkFDNURmLElBQUllLEVBQUVmLEVBQUU7b0JBQ1JDLE9BQU9jLEVBQUVkLEtBQUs7b0JBQ2RDLFVBQVVhLEVBQUViLFFBQVE7b0JBQ3BCQyxRQUFRWSxFQUFFQyxXQUFXLEdBQUcsQ0FBQywrQkFBK0IsRUFBRUQsRUFBRUMsV0FBVyxDQUFDLENBQUMsR0FBRztnQkFDOUU7WUFDQSxPQUFPVixJQUFJVyxNQUFNLENBQUMsS0FBS0osSUFBSSxDQUFDO2dCQUFFcEI7WUFBUTtRQUN4QyxFQUFFLE9BQU95QixHQUFHO1lBQ1ZDLFFBQVFDLEtBQUssQ0FBQ0Y7WUFDZCxPQUFPWixJQUFJVyxNQUFNLENBQUMsS0FBS0osSUFBSSxDQUFDckI7UUFDOUI7SUFDRjtJQUNBYyxJQUFJVyxNQUFNLENBQUMsS0FBS0osSUFBSSxDQUFDckI7QUFDdkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZXJzb25hbGl6ZWQtZGFzaGJvYXJkLy4vcGFnZXMvYXBpL3JlY29tbWVuZGF0aW9ucy50cz9lMmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgZmV0Y2ggZnJvbSAnbm9kZS1mZXRjaCdcblxuY29uc3Qgc2FtcGxlID0ge1xuICByZXN1bHRzOiBBcnJheS5mcm9tKHtsZW5ndGg6Nn0pLm1hcCgoXyxpKT0+KHtcbiAgICBpZDogaSsxMDAsXG4gICAgdGl0bGU6ICdNb3ZpZSBUaXRsZSAnKyhpKzEpLFxuICAgIG92ZXJ2aWV3OiAnT3ZlcnZpZXcgZm9yIG1vdmllICcrKGkrMSksXG4gICAgcG9zdGVyOiAnaHR0cHM6Ly9waWNzdW0ucGhvdG9zL3NlZWQvbW92aWUnKyhpKzEpKycvMjAwLzMwMCdcbiAgfSkpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcbiAgY29uc3Qga2V5ID0gcHJvY2Vzcy5lbnYuVE1EQl9LRVlcbiAgaWYgKGtleSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvcG9wdWxhcj9hcGlfa2V5PSR7a2V5fSZsYW5ndWFnZT1lbi1VUyZwYWdlPTFgKVxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHIuanNvbigpXG4gICAgICBjb25zdCByZXN1bHRzID0gKGRhdGEucmVzdWx0cyB8fCBbXSkuc2xpY2UoMCw2KS5tYXAoKG06YW55KT0+KHtcbiAgICAgICAgaWQ6IG0uaWQsXG4gICAgICAgIHRpdGxlOiBtLnRpdGxlLFxuICAgICAgICBvdmVydmlldzogbS5vdmVydmlldyxcbiAgICAgICAgcG9zdGVyOiBtLnBvc3Rlcl9wYXRoID8gYGh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3czMDAke20ucG9zdGVyX3BhdGh9YCA6IG51bGxcbiAgICAgIH0pKVxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgcmVzdWx0cyB9KVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihzYW1wbGUpXG4gICAgfVxuICB9XG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHNhbXBsZSlcbn1cbiJdLCJuYW1lcyI6WyJmZXRjaCIsInNhbXBsZSIsInJlc3VsdHMiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJtYXAiLCJfIiwiaSIsImlkIiwidGl0bGUiLCJvdmVydmlldyIsInBvc3RlciIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJrZXkiLCJwcm9jZXNzIiwiZW52IiwiVE1EQl9LRVkiLCJyIiwiZGF0YSIsImpzb24iLCJzbGljZSIsIm0iLCJwb3N0ZXJfcGF0aCIsInN0YXR1cyIsImUiLCJjb25zb2xlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/recommendations.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/recommendations.ts"));
module.exports = __webpack_exports__;

})();