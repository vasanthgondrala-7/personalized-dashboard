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
exports.id = "pages/api/news";
exports.ids = ["pages/api/news"];
exports.modules = {

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("node-fetch");

/***/ }),

/***/ "(api)/./pages/api/news.ts":
/*!***************************!*\
  !*** ./pages/api/news.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ \"node-fetch\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_0__);\n\nconst sample = {\n    articles: Array.from({\n        length: 10\n    }).map((_, i)=>({\n            id: i + 1,\n            title: \"News headline \" + (i + 1),\n            summary: \"This is a short summary for news article \" + (i + 1),\n            image: \"https://picsum.photos/seed/news\" + (i + 1) + \"/200/200\"\n        }))\n};\nasync function handler(req, res) {\n    const key = process.env.NEWSAPI_KEY;\n    const cats = String(req.query.cats || \"general\");\n    const page = Number(req.query.page || 1);\n    if (key) {\n        // Example: call NewsAPI.org (note: you must add NEWSAPI_KEY to .env.local)\n        const q = encodeURIComponent(cats);\n        const url = `https://newsapi.org/v2/top-headlines?category=${q}&page=${page}&pageSize=10&apiKey=${key}`;\n        try {\n            const r = await node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(url);\n            const data = await r.json();\n            // normalize to our expected shape\n            const articles = (data.articles || []).map((a, idx)=>({\n                    id: (page - 1) * 10 + idx + 1,\n                    title: a.title || \"No title\",\n                    summary: a.description || a.content || \"\",\n                    image: a.urlToImage || null\n                }));\n            return res.status(200).json({\n                articles\n            });\n        } catch (e) {\n            console.error(e);\n            return res.status(200).json(sample);\n        }\n    }\n    // fallback to mock data\n    res.status(200).json(sample);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3cy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDOEI7QUFFOUIsTUFBTUMsU0FBUztJQUNiQyxVQUFVQyxNQUFNQyxJQUFJLENBQUM7UUFBQ0MsUUFBTztJQUFFLEdBQUdDLEdBQUcsQ0FBQyxDQUFDQyxHQUFFQyxJQUFLO1lBQzVDQyxJQUFJRCxJQUFFO1lBQ05FLE9BQU8sbUJBQW9CRixDQUFBQSxJQUFFO1lBQzdCRyxTQUFTLDhDQUErQ0gsQ0FBQUEsSUFBRTtZQUMxREksT0FBTyxvQ0FBbUNKLENBQUFBLElBQUUsS0FBRztRQUNqRDtBQUNGO0FBRWUsZUFBZUssUUFBUUMsR0FBbUIsRUFBRUMsR0FBb0I7SUFDN0UsTUFBTUMsTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxXQUFXO0lBQ25DLE1BQU1DLE9BQU9DLE9BQU9QLElBQUlRLEtBQUssQ0FBQ0YsSUFBSSxJQUFJO0lBQ3RDLE1BQU1HLE9BQU9DLE9BQU9WLElBQUlRLEtBQUssQ0FBQ0MsSUFBSSxJQUFJO0lBQ3RDLElBQUlQLEtBQUs7UUFDUCwyRUFBMkU7UUFDM0UsTUFBTVMsSUFBSUMsbUJBQW1CTjtRQUM3QixNQUFNTyxNQUFNLENBQUMsOENBQThDLEVBQUVGLEVBQUUsTUFBTSxFQUFFRixLQUFLLG9CQUFvQixFQUFFUCxJQUFJLENBQUM7UUFDdkcsSUFBSTtZQUNGLE1BQU1ZLElBQUksTUFBTTVCLGlEQUFLQSxDQUFDMkI7WUFDdEIsTUFBTUUsT0FBTyxNQUFNRCxFQUFFRSxJQUFJO1lBQ3pCLGtDQUFrQztZQUNsQyxNQUFNNUIsV0FBVyxDQUFDMkIsS0FBSzNCLFFBQVEsSUFBSSxFQUFFLEVBQUVJLEdBQUcsQ0FBQyxDQUFDeUIsR0FBT0MsTUFBZ0I7b0JBQ2pFdkIsSUFBSSxDQUFDYyxPQUFLLEtBQUcsS0FBS1MsTUFBTTtvQkFDeEJ0QixPQUFPcUIsRUFBRXJCLEtBQUssSUFBSTtvQkFDbEJDLFNBQVNvQixFQUFFRSxXQUFXLElBQUlGLEVBQUVHLE9BQU8sSUFBSTtvQkFDdkN0QixPQUFPbUIsRUFBRUksVUFBVSxJQUFJO2dCQUN6QjtZQUNBLE9BQU9wQixJQUFJcUIsTUFBTSxDQUFDLEtBQUtOLElBQUksQ0FBQztnQkFBRTVCO1lBQVM7UUFDekMsRUFBRSxPQUFPbUMsR0FBRztZQUNWQyxRQUFRQyxLQUFLLENBQUNGO1lBQ2QsT0FBT3RCLElBQUlxQixNQUFNLENBQUMsS0FBS04sSUFBSSxDQUFDN0I7UUFDOUI7SUFDRjtJQUNBLHdCQUF3QjtJQUN4QmMsSUFBSXFCLE1BQU0sQ0FBQyxLQUFLTixJQUFJLENBQUM3QjtBQUN2QiIsInNvdXJjZXMiOlsid2VicGFjazovL3BlcnNvbmFsaXplZC1kYXNoYm9hcmQvLi9wYWdlcy9hcGkvbmV3cy50cz80N2ZhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgZmV0Y2ggZnJvbSAnbm9kZS1mZXRjaCdcblxuY29uc3Qgc2FtcGxlID0ge1xuICBhcnRpY2xlczogQXJyYXkuZnJvbSh7bGVuZ3RoOjEwfSkubWFwKChfLGkpPT4oe1xuICAgIGlkOiBpKzEsXG4gICAgdGl0bGU6ICdOZXdzIGhlYWRsaW5lICcgKyAoaSsxKSxcbiAgICBzdW1tYXJ5OiAnVGhpcyBpcyBhIHNob3J0IHN1bW1hcnkgZm9yIG5ld3MgYXJ0aWNsZSAnICsgKGkrMSksXG4gICAgaW1hZ2U6ICdodHRwczovL3BpY3N1bS5waG90b3Mvc2VlZC9uZXdzJysoaSsxKSsnLzIwMC8yMDAnXG4gIH0pKVxufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XG4gIGNvbnN0IGtleSA9IHByb2Nlc3MuZW52Lk5FV1NBUElfS0VZXG4gIGNvbnN0IGNhdHMgPSBTdHJpbmcocmVxLnF1ZXJ5LmNhdHMgfHwgJ2dlbmVyYWwnKVxuICBjb25zdCBwYWdlID0gTnVtYmVyKHJlcS5xdWVyeS5wYWdlIHx8IDEpXG4gIGlmIChrZXkpIHtcbiAgICAvLyBFeGFtcGxlOiBjYWxsIE5ld3NBUEkub3JnIChub3RlOiB5b3UgbXVzdCBhZGQgTkVXU0FQSV9LRVkgdG8gLmVudi5sb2NhbClcbiAgICBjb25zdCBxID0gZW5jb2RlVVJJQ29tcG9uZW50KGNhdHMpXG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vbmV3c2FwaS5vcmcvdjIvdG9wLWhlYWRsaW5lcz9jYXRlZ29yeT0ke3F9JnBhZ2U9JHtwYWdlfSZwYWdlU2l6ZT0xMCZhcGlLZXk9JHtrZXl9YFxuICAgIHRyeSB7XG4gICAgICBjb25zdCByID0gYXdhaXQgZmV0Y2godXJsKVxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHIuanNvbigpXG4gICAgICAvLyBub3JtYWxpemUgdG8gb3VyIGV4cGVjdGVkIHNoYXBlXG4gICAgICBjb25zdCBhcnRpY2xlcyA9IChkYXRhLmFydGljbGVzIHx8IFtdKS5tYXAoKGE6YW55LCBpZHg6bnVtYmVyKSA9PiAoe1xuICAgICAgICBpZDogKHBhZ2UtMSkqMTAgKyBpZHggKyAxLFxuICAgICAgICB0aXRsZTogYS50aXRsZSB8fCAnTm8gdGl0bGUnLFxuICAgICAgICBzdW1tYXJ5OiBhLmRlc2NyaXB0aW9uIHx8IGEuY29udGVudCB8fCAnJyxcbiAgICAgICAgaW1hZ2U6IGEudXJsVG9JbWFnZSB8fCBudWxsXG4gICAgICB9KSlcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IGFydGljbGVzIH0pXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlKVxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHNhbXBsZSlcbiAgICB9XG4gIH1cbiAgLy8gZmFsbGJhY2sgdG8gbW9jayBkYXRhXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHNhbXBsZSlcbn1cbiJdLCJuYW1lcyI6WyJmZXRjaCIsInNhbXBsZSIsImFydGljbGVzIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwibWFwIiwiXyIsImkiLCJpZCIsInRpdGxlIiwic3VtbWFyeSIsImltYWdlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImtleSIsInByb2Nlc3MiLCJlbnYiLCJORVdTQVBJX0tFWSIsImNhdHMiLCJTdHJpbmciLCJxdWVyeSIsInBhZ2UiLCJOdW1iZXIiLCJxIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwidXJsIiwiciIsImRhdGEiLCJqc29uIiwiYSIsImlkeCIsImRlc2NyaXB0aW9uIiwiY29udGVudCIsInVybFRvSW1hZ2UiLCJzdGF0dXMiLCJlIiwiY29uc29sZSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/news.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/news.ts"));
module.exports = __webpack_exports__;

})();