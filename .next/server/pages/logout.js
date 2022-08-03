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
exports.id = "pages/logout";
exports.ids = ["pages/logout"];
exports.modules = {

/***/ "./pages/logout.js":
/*!*************************!*\
  !*** ./pages/logout.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Logout),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookies */ \"cookies\");\n/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookies__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction Logout() {\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        (0,next_auth_client__WEBPACK_IMPORTED_MODULE_3__.signOut)({\n            callbackUrl: \"/\"\n        });\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: \" \"\n    }, void 0, false);\n};\nasync function getServerSideProps(context) {\n    try {\n        const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_3__.getSession)(context);\n        const cookiesSetter = new (cookies__WEBPACK_IMPORTED_MODULE_2___default())(context.req, context.res);\n        await axios__WEBPACK_IMPORTED_MODULE_1___default().post(process.env.BE_AUTH + \"revoke-token\", {}, {\n            headers: {\n                Cookie: \"refreshToken=\" + cookiesSetter.get(\"refreshToken\") + \";\",\n                Authorization: \"Bearer \" + session.user.jwt\n            }\n        });\n        cookiesSetter.set(\"refreshToken\", {\n            maxAge: 0\n        });\n    } catch (error) {\n    // return { redirect: { permanent: false, destination: \"/\", }, }  \n    }\n    return {\n        props: {\n            data: 1\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dvdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDSTtBQUN5QjtBQUNyQjtBQUVuQixTQUFTSyxNQUFNLEdBQUc7SUFDL0JELGdEQUFTLENBQUMsSUFBTTtRQUFFRCx5REFBTyxDQUFDO1lBQUVHLFdBQVcsRUFBRSxHQUFHO1NBQUUsQ0FBQztLQUFFLENBQUM7SUFDbEQscUJBQVE7a0JBQUUsR0FBQztxQkFBRyxDQUFFO0NBQ2pCO0FBQ00sZUFBZUMsa0JBQWtCLENBQUNDLE9BQU8sRUFBRTtJQUNoRCxJQUFJO1FBQ0YsTUFBTUMsT0FBTyxHQUFHLE1BQU1QLDREQUFVLENBQUNNLE9BQU8sQ0FBQztRQUN6QyxNQUFNRSxhQUFhLEdBQUcsSUFBSVQsZ0RBQU8sQ0FBQ08sT0FBTyxDQUFDRyxHQUFHLEVBQUVILE9BQU8sQ0FBQ0ksR0FBRyxDQUFDO1FBQzNELE1BQU1aLGlEQUFVLENBQUNjLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxPQUFPLEdBQUcsY0FBYyxFQUFFLEVBQUUsRUFBRTtZQUN6REMsT0FBTyxFQUFFO2dCQUFFQyxNQUFNLEVBQUUsZUFBZSxHQUFHUixhQUFhLENBQUNTLEdBQUcsQ0FBQyxjQUFjLENBQUMsR0FBRyxHQUFHO2dCQUFFQyxhQUFhLEVBQUUsU0FBUyxHQUFHWCxPQUFPLENBQUNZLElBQUksQ0FBQ0MsR0FBRzthQUFFO1NBQzVILENBQUMsQ0FBQztRQUNIWixhQUFhLENBQUNhLEdBQUcsQ0FBQyxjQUFjLEVBQUU7WUFBRUMsTUFBTSxFQUFFLENBQUM7U0FBRSxDQUFDLENBQUM7S0FDbEQsQ0FBQyxPQUFPQyxLQUFLLEVBQUU7SUFDZCxrRUFBa0U7S0FDbkU7SUFDRCxPQUFPO1FBQUVDLEtBQUssRUFBRTtZQUFFQyxJQUFJLEVBQUUsQ0FBQztTQUFFO0tBQUcsQ0FBQztDQUNoQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vcGFnZXMvbG9nb3V0LmpzP2FjNDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tIFwiY29va2llc1wiO1xyXG5pbXBvcnQgeyBnZXRTZXNzaW9uLCBzaWduT3V0IH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dvdXQoKSB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHsgc2lnbk91dCh7IGNhbGxiYWNrVXJsOiBcIi9cIiB9KSB9KVxyXG4gIHJldHVybiAoPD4gPC8+KTtcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oY29udGV4dClcclxuICAgIGNvbnN0IGNvb2tpZXNTZXR0ZXIgPSBuZXcgQ29va2llcyhjb250ZXh0LnJlcSwgY29udGV4dC5yZXMpXHJcbiAgICBhd2FpdCBheGlvcy5wb3N0KHByb2Nlc3MuZW52LkJFX0FVVEggKyBcInJldm9rZS10b2tlblwiLCB7fSwge1xyXG4gICAgICBoZWFkZXJzOiB7IENvb2tpZTogXCJyZWZyZXNoVG9rZW49XCIgKyBjb29raWVzU2V0dGVyLmdldCgncmVmcmVzaFRva2VuJykgKyBcIjtcIiwgQXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgc2Vzc2lvbi51c2VyLmp3dCB9XHJcbiAgICB9KTtcclxuICAgIGNvb2tpZXNTZXR0ZXIuc2V0KCdyZWZyZXNoVG9rZW4nLCB7IG1heEFnZTogMCB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgLy8gcmV0dXJuIHsgcmVkaXJlY3Q6IHsgcGVybWFuZW50OiBmYWxzZSwgZGVzdGluYXRpb246IFwiL1wiLCB9LCB9ICBcclxuICB9XHJcbiAgcmV0dXJuIHsgcHJvcHM6IHsgZGF0YTogMSB9LCB9O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsIkNvb2tpZXMiLCJnZXRTZXNzaW9uIiwic2lnbk91dCIsInVzZUVmZmVjdCIsIkxvZ291dCIsImNhbGxiYWNrVXJsIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInNlc3Npb24iLCJjb29raWVzU2V0dGVyIiwicmVxIiwicmVzIiwicG9zdCIsInByb2Nlc3MiLCJlbnYiLCJCRV9BVVRIIiwiaGVhZGVycyIsIkNvb2tpZSIsImdldCIsIkF1dGhvcml6YXRpb24iLCJ1c2VyIiwiand0Iiwic2V0IiwibWF4QWdlIiwiZXJyb3IiLCJwcm9wcyIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/logout.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "cookies":
/*!**************************!*\
  !*** external "cookies" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("cookies");

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("next-auth/client");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = (__webpack_exec__("./pages/logout.js"));
module.exports = __webpack_exports__;

})();