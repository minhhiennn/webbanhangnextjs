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
exports.id = "pages/middleware";
exports.ids = ["pages/middleware"];
exports.modules = {

/***/ "./pages/middleware.js":
/*!*****************************!*\
  !*** ./pages/middleware.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Middleware),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Middleware() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n};\nasync function getServerSideProps({ req  }) {\n    console.log(\"????\");\n    const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.getSession)({\n        req\n    });\n    if (session) {\n        if (session.user.role.includes(\"User\")) {\n            return {\n                redirect: {\n                    permanent: false,\n                    destination: \"/\"\n                }\n            };\n        }\n        if (session.user.role.includes(\"Admin\")) {\n            return {\n                redirect: {\n                    permanent: false,\n                    destination: \"/admin/browse-products\"\n                }\n            };\n        }\n    }\n    return {\n        redirect: {\n            permanent: false,\n            destination: \"/\"\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9taWRkbGV3YXJlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQThDO0FBRS9CLFNBQVNDLFVBQVUsR0FBRztJQUNqQyxxQkFDSSw2SUFDRyxDQUNOO0NBQ0o7QUFFTSxlQUFlQyxrQkFBa0IsQ0FBQyxFQUFFQyxHQUFHLEdBQUUsRUFBRTtJQUM5Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEIsTUFBTUMsT0FBTyxHQUFHLE1BQU1OLDREQUFVLENBQUM7UUFBRUcsR0FBRztLQUFFLENBQUM7SUFDekMsSUFBSUcsT0FBTyxFQUFFO1FBQ1QsSUFBSUEsT0FBTyxDQUFDQyxJQUFJLENBQUNDLElBQUksQ0FBQ0MsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3BDLE9BQU87Z0JBQ0hDLFFBQVEsRUFBRTtvQkFDTkMsU0FBUyxFQUFFLEtBQUs7b0JBQ2hCQyxXQUFXLEVBQUUsR0FBRztpQkFDbkI7YUFDSjtTQUNKO1FBQ0QsSUFBSU4sT0FBTyxDQUFDQyxJQUFJLENBQUNDLElBQUksQ0FBQ0MsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3JDLE9BQU87Z0JBQ0hDLFFBQVEsRUFBRTtvQkFDTkMsU0FBUyxFQUFFLEtBQUs7b0JBQ2hCQyxXQUFXLEVBQUUsd0JBQXdCO2lCQUN4QzthQUNKO1NBQ0o7S0FDSjtJQUNELE9BQU87UUFDSEYsUUFBUSxFQUFFO1lBQ05DLFNBQVMsRUFBRSxLQUFLO1lBQ2hCQyxXQUFXLEVBQUUsR0FBRztTQUNuQjtLQUNKO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL21pZGRsZXdhcmUuanM/ZWVkMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL2NsaWVudCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNaWRkbGV3YXJlKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcmVxIH0pIHtcclxuICAgIGNvbnNvbGUubG9nKCc/Pz8/Jyk7XHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbih7IHJlcSB9KTtcclxuICAgIGlmIChzZXNzaW9uKSB7XHJcbiAgICAgICAgaWYgKHNlc3Npb24udXNlci5yb2xlLmluY2x1ZGVzKCdVc2VyJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHJlZGlyZWN0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbjogXCIvXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2Vzc2lvbi51c2VyLnJvbGUuaW5jbHVkZXMoJ0FkbWluJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHJlZGlyZWN0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbjogXCIvYWRtaW4vYnJvd3NlLXByb2R1Y3RzXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVkaXJlY3Q6IHtcclxuICAgICAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcclxuICAgICAgICAgICAgZGVzdGluYXRpb246IFwiL1wiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbImdldFNlc3Npb24iLCJNaWRkbGV3YXJlIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicmVxIiwiY29uc29sZSIsImxvZyIsInNlc3Npb24iLCJ1c2VyIiwicm9sZSIsImluY2x1ZGVzIiwicmVkaXJlY3QiLCJwZXJtYW5lbnQiLCJkZXN0aW5hdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/middleware.js\n");

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("next-auth/client");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/middleware.js"));
module.exports = __webpack_exports__;

})();