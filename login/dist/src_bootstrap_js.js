/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunklogin"] = self["webpackChunklogin"] || []).push([["src_bootstrap_js"],{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"webpack/sharing/consume/default/react-router-dom/react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"webpack/sharing/consume/default/@material-ui/core/@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_login_Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/Login */ \"./src/components/login/Login.js\");\n/* harmony import */ var _styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/GlobalStyles */ \"./src/styles/GlobalStyles.js\");\n/* harmony import */ var _theme_Theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./theme/Theme */ \"./src/theme/Theme.js\");\n\n\n\n\n\n\n\nfunction App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {\n    theme: _theme_Theme__WEBPACK_IMPORTED_MODULE_5__.default\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_4__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_login_Login__WEBPACK_IMPORTED_MODULE_3__.default, null));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://login/./src/App.js?");

/***/ }),

/***/ "./src/bootstrap.js":
/*!**************************!*\
  !*** ./src/bootstrap.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"webpack/sharing/consume/default/react-dom/react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_2___default().render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_App__WEBPACK_IMPORTED_MODULE_0__.default, null), document.querySelector(\"#root\"));\n\n//# sourceURL=webpack://login/./src/bootstrap.js?");

/***/ }),

/***/ "./src/components/login/Login.js":
/*!***************************************!*\
  !*** ./src/components/login/Login.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"webpack/sharing/consume/default/axios/axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"webpack/sharing/consume/default/@material-ui/core/@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nconst Login = () => {\n  const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n  const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n\n  const onChangeSenha = event => {\n    setPassword(event.target.value);\n  };\n\n  const onChangeEmail = event => {\n    setEmail(event.target.value);\n  };\n\n  const submitForm = async event => {\n    event.preventDefault();\n\n    if (email && password) {\n      const result = await axios__WEBPACK_IMPORTED_MODULE_2___default().post(\"https://run.mocky.io/v3/cef5127a-fbfe-4d6b-89cc-6296fd666fcb\", {\n        email,\n        password\n      });\n      console.log(result);\n\n      if (result.status === 200) {\n        const {\n          data: {\n            userName\n          }\n        } = result;\n        localStorage.setItem('userName', userName);\n        window.location = \"/dashboard\";\n      }\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"form\", {\n    onSubmit: submitForm,\n    style: {\n      'backgroundColor': 'background.default',\n      'display': 'flex',\n      'position': 'relative',\n      'flexDirection': 'column',\n      'height': '100%',\n      'widht': '100vw',\n      'justifyContent': 'center'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Box, {\n    sx: {\n      backgroundColor: 'background.default',\n      display: 'inline-grid',\n      flexDirection: 'column',\n      widht: '100vw',\n      justifyContent: 'center',\n      marginTop: '115px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {\n    sx: {\n      color: 'color.primary',\n      textTransform: 'uppercase',\n      textAlign: 'center',\n      marginBottom: '20px'\n    },\n    variant: \"h4\"\n  }, \"Acessar minha conta\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.TextField, {\n    sx: {\n      width: '400px',\n      '&:hover': {\n        color: 'color.secondary'\n      }\n    },\n    id: \"outlined-basic\",\n    label: \"Email\",\n    variant: \"outlined\",\n    placeholder: \"exemplo@email.com\",\n    onChange: onChangeEmail\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.TextField, {\n    sx: {\n      marginTop: '20px',\n      '&:hover': {\n        borderColor: 'color.secondary'\n      }\n    },\n    id: \"standard-password-input\",\n    type: \"password\",\n    autoComplete: \"current-password\",\n    label: \"Senha\",\n    variant: \"outlined\",\n    placeholder: \"********\",\n    onChange: onChangeSenha\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Link, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {\n    variant: \"h6\",\n    sx: {\n      color: 'color.primary',\n      top: '10px',\n      '&:hover': {\n        color: 'color.secondary'\n      },\n      cursor: 'pointer'\n    }\n  }, \"Esqueci minha senha\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Button, {\n    sx: {\n      marginTop: '30px',\n      backgroundColor: 'color.secondary',\n      height: '40px',\n      color: 'text.tertiary',\n      '&:focus': {\n        backgroundColor: 'color.secondary'\n      },\n      '&:hover': {\n        backgroundColor: 'color.green'\n      }\n    },\n    variant: \"contained\",\n    type: \"submit\"\n  }, \"Entrar\"))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n\n//# sourceURL=webpack://login/./src/components/login/Login.js?");

/***/ }),

/***/ "./src/styles/GlobalStyles.js":
/*!************************************!*\
  !*** ./src/styles/GlobalStyles.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ \"webpack/sharing/consume/default/@material-ui/core/@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);\n\nconst useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(() => (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.createStyles)({\n  '@global': {\n    '*': {\n      boxSizing: 'border-box',\n      margin: 0,\n      padding: 0\n    },\n    html: {\n      '-webkit-font-smoothing': 'antialiased',\n      '-moz-osx-font-smoothing': 'grayscale',\n      height: '100%',\n      width: '100%'\n    },\n    body: {\n      backgroundColor: '#F4F6F8',\n      height: '100%',\n      width: '100%'\n    },\n    a: {\n      textDecoration: 'none'\n    },\n    '#root': {\n      height: '100%',\n      width: '100%'\n    }\n  }\n}));\n\nconst GlobalStyles = () => {\n  useStyles();\n  return null;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalStyles);\n\n//# sourceURL=webpack://login/./src/styles/GlobalStyles.js?");

/***/ }),

/***/ "./src/theme/Theme.js":
/*!****************************!*\
  !*** ./src/theme/Theme.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ \"webpack/sharing/consume/default/@material-ui/core/@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typography */ \"./src/theme/typography.js\");\n\n\nconst theme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.createMuiTheme)({\n  palette: {\n    background: {\n      default: '#F4F6F8',\n      paper: _material_ui_core__WEBPACK_IMPORTED_MODULE_0__.colors.common.white\n    },\n    primary: {\n      contrastText: '#ffffff',\n      main: '#F4F6F8'\n    },\n    text: {\n      primary: '#172b4d',\n      secondary: '#6b778c',\n      tertiary: '#F4F6F8'\n    },\n    color: {\n      primary: '#898989',\n      secondary: 'rgb(101, 163, 0)',\n      tertiary: '#FFFFFF',\n      green: 'rgb(139, 214, 0)'\n    }\n  },\n  typography: _typography__WEBPACK_IMPORTED_MODULE_1__.default\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);\n\n//# sourceURL=webpack://login/./src/theme/Theme.js?");

/***/ }),

/***/ "./src/theme/typography.js":
/*!*********************************!*\
  !*** ./src/theme/typography.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  h1: {\n    fontWeight: 500,\n    fontSize: 35,\n    letterSpacing: '-0.24px'\n  },\n  h2: {\n    fontWeight: 500,\n    fontSize: 29,\n    letterSpacing: '-0.24px'\n  },\n  h3: {\n    fontWeight: 500,\n    fontSize: 24,\n    letterSpacing: '-0.06px'\n  },\n  h4: {\n    fontWeight: 500,\n    fontSize: 20,\n    letterSpacing: '-0.06px'\n  },\n  h5: {\n    fontWeight: 500,\n    fontSize: 16,\n    letterSpacing: '-0.05px'\n  },\n  h6: {\n    fontWeight: 500,\n    fontSize: 14,\n    letterSpacing: '-0.05px'\n  },\n  overline: {\n    fontWeight: 500\n  }\n});\n\n//# sourceURL=webpack://login/./src/theme/typography.js?");

/***/ })

}]);