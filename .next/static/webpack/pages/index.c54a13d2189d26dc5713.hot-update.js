webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/jacksonmurphey/Desktop/NEXTJS/nextjs-meetupApp/pages/index.js\",\n    _this = undefined;\n\n//domain-name.com/ \n//This is our root route. \n\n\n // import { useEffect, useState } from 'react'\n\nvar HomePage = function HomePage(props) {\n  //Since we are running the 'getStaticProps()' function below, we no longer need to manage state, or use useEffect()\n  // const [loadedMeetups, setLoadedMeetups] = useState([])\n  // useEffect(() => {\n  //     //fetch request\n  //     setLoadedMeetups(DUMMYDATA)\n  // }, [])\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"React Meetups\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: \"Browse a large list of highly active React Meetups\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      meetups: props.meetups\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 9\n  }, _this);\n}; //static generation   alternatively :(SSG)-static site generation\n//below function only works in our pages. This allows you to load data before rendering \n//this code will never run on our clients side.\n\n\n_c = HomePage;\n//alternative solution for getStaticProps()\n//This solution always runs on the server side on deployment\n//Only use this is you need access to request/response data. or if your data changes very frequently\n// export const getServerSideProps = async (context) => {\n//     const req = context.req\n//     const res = context.res\n//     //fetch data from API here.\n//     return {\n//         props: {\n//             meetups: DUMMYDATA\n//         }\n//     }\n// }\n//if you dont have data that changes frequently, then getStaticProps is more efficient.\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lUGFnZSIsInByb3BzIiwibWVldHVwcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFDQTtDQUdBOztBQUdBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxzQkFDSSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSw0QkFDSSxxRUFBQyxnREFBRDtBQUFBLDhCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFNLFlBQUksRUFBQyxhQUFYO0FBQXlCLGVBQU8sRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFLSSxxRUFBQyxzRUFBRDtBQUFZLGFBQU8sRUFBRUEsS0FBSyxDQUFDQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFTSCxDQWxCRCxDLENBb0JBO0FBQ0E7QUFDQTs7O0tBdEJNRixRO0FBZ0ROO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRWVBLHVFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2RvbWFpbi1uYW1lLmNvbS8gXG4vL1RoaXMgaXMgb3VyIHJvb3Qgcm91dGUuIFxuXG5cbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBNZWV0dXBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0J1xuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tICdtb25nb2RiJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuLy8gaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5cbmNvbnN0IEhvbWVQYWdlID0gKHByb3BzKSA9PiB7XG4gICAgLy9TaW5jZSB3ZSBhcmUgcnVubmluZyB0aGUgJ2dldFN0YXRpY1Byb3BzKCknIGZ1bmN0aW9uIGJlbG93LCB3ZSBubyBsb25nZXIgbmVlZCB0byBtYW5hZ2Ugc3RhdGUsIG9yIHVzZSB1c2VFZmZlY3QoKVxuICAgIC8vIGNvbnN0IFtsb2FkZWRNZWV0dXBzLCBzZXRMb2FkZWRNZWV0dXBzXSA9IHVzZVN0YXRlKFtdKVxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gICAgIC8vZmV0Y2ggcmVxdWVzdFxuICAgIC8vICAgICBzZXRMb2FkZWRNZWV0dXBzKERVTU1ZREFUQSlcbiAgICAvLyB9LCBbXSlcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPlJlYWN0IE1lZXR1cHM8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJyBjb250ZW50PSdCcm93c2UgYSBsYXJnZSBsaXN0IG9mIGhpZ2hseSBhY3RpdmUgUmVhY3QgTWVldHVwcycgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxNZWV0dXBMaXN0IG1lZXR1cHM9e3Byb3BzLm1lZXR1cHN9IC8+XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKVxufVxuXG4vL3N0YXRpYyBnZW5lcmF0aW9uICAgYWx0ZXJuYXRpdmVseSA6KFNTRyktc3RhdGljIHNpdGUgZ2VuZXJhdGlvblxuLy9iZWxvdyBmdW5jdGlvbiBvbmx5IHdvcmtzIGluIG91ciBwYWdlcy4gVGhpcyBhbGxvd3MgeW91IHRvIGxvYWQgZGF0YSBiZWZvcmUgcmVuZGVyaW5nIFxuLy90aGlzIGNvZGUgd2lsbCBuZXZlciBydW4gb24gb3VyIGNsaWVudHMgc2lkZS5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgICAvL2ZldGNoIGRhdGEgZnJvbSBBUEkgaGVyZVxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoJ21vbmdvZGIrc3J2Oi8vYWRtaW46cm5faF9xOEFfRUxoeDNjQGNsdXN0ZXIwLjV2b3pzLm1vbmdvZGIubmV0L21lZXR1cHNEQj9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknKVxuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKClcbiAgICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKVxuXG4gICAgY29uc3QgbWVldHVwcyA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmQoKS50b0FycmF5KClcblxuICAgIGNsaWVudC5jbG9zZSgpXG5cbiAgICAvL3lvdSBtdXN0IGFsd2F5cyByZXR1cm4gYW4gb2JqLiBcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgbWVldHVwczogbWVldHVwcy5tYXAobWVldHVwID0+ICh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lZXR1cC50aXRsZSxcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiBtZWV0dXAuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICBpbWFnZTogbWVldHVwLmltYWdlLFxuICAgICAgICAgICAgICAgIGlkOiBtZWV0dXAuX2lkLnRvU3RyaW5nKClcbiAgICAgICAgICAgIH0pKVxuICAgICAgICB9LFxuICAgICAgICByZXZhbGlkYXRlOiAxMCAvLyMgb2Ygc2Vjb25kcyBORVhUSlMgd2lsbCB3YWl0IHRpbGwgaXQgcmVnZW5lcmF0ZXMgdGhpcyBwYWdlLiBUaGlzIGVuc3VyZXMgeW91ciBkYXRhIGlzIG5ldmVyIG9sZGVyIHRoYW4gMTBzZWNvbmRzLCB5b3UgY2FuIHNldCB0byBhbnkgdGltZS1mcmFtZVxuICAgIH1cbn1cblxuXG4vL2FsdGVybmF0aXZlIHNvbHV0aW9uIGZvciBnZXRTdGF0aWNQcm9wcygpXG4vL1RoaXMgc29sdXRpb24gYWx3YXlzIHJ1bnMgb24gdGhlIHNlcnZlciBzaWRlIG9uIGRlcGxveW1lbnRcbi8vT25seSB1c2UgdGhpcyBpcyB5b3UgbmVlZCBhY2Nlc3MgdG8gcmVxdWVzdC9yZXNwb25zZSBkYXRhLiBvciBpZiB5b3VyIGRhdGEgY2hhbmdlcyB2ZXJ5IGZyZXF1ZW50bHlcbi8vIGV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuLy8gICAgIGNvbnN0IHJlcSA9IGNvbnRleHQucmVxXG4vLyAgICAgY29uc3QgcmVzID0gY29udGV4dC5yZXNcblxuLy8gICAgIC8vZmV0Y2ggZGF0YSBmcm9tIEFQSSBoZXJlLlxuXG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgcHJvcHM6IHtcbi8vICAgICAgICAgICAgIG1lZXR1cHM6IERVTU1ZREFUQVxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gfVxuXG4vL2lmIHlvdSBkb250IGhhdmUgZGF0YSB0aGF0IGNoYW5nZXMgZnJlcXVlbnRseSwgdGhlbiBnZXRTdGF0aWNQcm9wcyBpcyBtb3JlIGVmZmljaWVudC5cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})