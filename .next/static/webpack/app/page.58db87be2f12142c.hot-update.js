"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/lib/constants/excuses.ts":
/*!**************************************!*\
  !*** ./src/lib/constants/excuses.ts ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EXCUSE_TEMPLATES: () => (/* binding */ EXCUSE_TEMPLATES),\n/* harmony export */   generateVariable: () => (/* binding */ generateVariable)\n/* harmony export */ });\n/* harmony import */ var _faker_js_faker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @faker-js/faker */ \"(app-pages-browser)/./node_modules/@faker-js/faker/dist/chunk-TDUB3YPO.js\");\n\n// Custom weather phenomena\nconst weatherPhenomena = [\n    'quantum storm',\n    'temporal rain',\n    'probability fog',\n    'dimensional vortex',\n    'reality distortion',\n    'paradox wave',\n    'time tsunami',\n    'entropy blizzard',\n    'cosmic hurricane',\n    'quantum lightning',\n    'parallel universe precipitation',\n    'timeline tornado',\n    'causality cyclone',\n    'space-time aurora',\n    'multiversal mist'\n];\n// Variable generators using faker\nconst generateVariables = {\n    pet: ()=>_faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.a.animal.type(),\n    item: ()=>_faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.a.commerce.product(),\n    unexpected: ()=>_faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.a.word.adjective(),\n    event: ()=>_faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.a.word.noun(),\n    location: ()=>_faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.a.location.city(),\n    device: ()=>_faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.a.commerce.productName(),\n    system: ()=>_faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.a.company.name(),\n    technical_issue: ()=>_faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.a.hacker.verb(),\n    creature: ()=>_faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.a.animal.type(),\n    appliance: ()=>_faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.a.commerce.productName(),\n    possessed_item: ()=>_faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.a.commerce.productName(),\n    weather_phenomenon: ()=>weatherPhenomena[Math.floor(Math.random() * weatherPhenomena.length)],\n    plant: ()=>_faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.a.science.chemicalElement(),\n    platform: ()=>_faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.a.company.name(),\n    social_activity: ()=>_faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.a.word.verb(),\n    relative: ()=>_faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.a.person.firstName(),\n    transport: ()=>_faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.a.vehicle.vehicle(),\n    tech_jargon: ()=>_faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.a.hacker.phrase(),\n    celebrity: ()=>_faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.a.person.fullName(),\n    food_item: ()=>_faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.a.commerce.product(),\n    hobby: ()=>_faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.a.word.verb(),\n    smart_device: ()=>_faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.a.commerce.productName()\n};\nconst EXCUSE_TEMPLATES = {\n    classic: [\n        {\n            id: 'classic-001',\n            category: 'classic',\n            template: 'My {pet} ate my {item}',\n            variables: [\n                'pet',\n                'item'\n            ],\n            believabilityScore: 0.4\n        },\n        {\n            id: 'classic-002',\n            category: 'classic',\n            template: 'Got stuck in {unexpected} traffic because of a {event}',\n            variables: [\n                'unexpected',\n                'event'\n            ],\n            believabilityScore: 0.7\n        },\n        {\n            id: 'classic-003',\n            category: 'classic',\n            template: 'My {transport} broke down in the middle of {location}',\n            variables: [\n                'transport',\n                'location'\n            ],\n            believabilityScore: 0.8\n        },\n        {\n            id: 'classic-004',\n            category: 'classic',\n            template: 'Lost track of time helping my {relative} move their {item}',\n            variables: [\n                'relative',\n                'item'\n            ],\n            believabilityScore: 0.6\n        }\n    ],\n    'sci-fi': [\n        {\n            id: 'scifi-001',\n            category: 'sci-fi',\n            template: 'Had to prevent a temporal paradox in the {location} timeline',\n            variables: [\n                'location'\n            ],\n            believabilityScore: 0.1\n        },\n        {\n            id: 'scifi-002',\n            category: 'sci-fi',\n            template: 'My {device} created a quantum entanglement with my {item}',\n            variables: [\n                'device',\n                'item'\n            ],\n            believabilityScore: 0.2\n        },\n        {\n            id: 'scifi-003',\n            category: 'sci-fi',\n            template: 'My {smart_device} achieved sentience and needed emotional counseling',\n            variables: [\n                'smart_device'\n            ],\n            believabilityScore: 0.1\n        },\n        {\n            id: 'scifi-004',\n            category: 'sci-fi'\n        },\n        {\n            id: 'corp-003',\n            category: 'corporate',\n            template: 'Had an emergency {tech_jargon} meeting with the {system} team',\n            variables: [\n                'tech_jargon',\n                'system'\n            ],\n            believabilityScore: 0.7\n        },\n        {\n            id: 'corp-004',\n            category: 'corporate',\n            template: 'The {device} integration failed during the {technical_issue} phase',\n            variables: [\n                'device',\n                'technical_issue'\n            ],\n            believabilityScore: 0.75\n        }\n    ],\n    supernatural: [\n        {\n            id: 'super-001',\n            category: 'supernatural',\n            template: 'A {creature} was haunting my {appliance}',\n            variables: [\n                'creature',\n                'appliance'\n            ],\n            believabilityScore: 0.1\n        },\n        {\n            id: 'super-002',\n            category: 'supernatural',\n            template: 'Had to perform an emergency exorcism on my {possessed_item}',\n            variables: [\n                'possessed_item'\n            ],\n            believabilityScore: 0.2\n        },\n        {\n            id: 'super-003',\n            category: 'supernatural',\n            template: 'My {item} started predicting the future and needed recalibration',\n            variables: [\n                'item'\n            ],\n            believabilityScore: 0.1\n        },\n        {\n            id: 'super-004',\n            category: 'supernatural',\n            template: 'Got stuck in a time loop while making {food_item}',\n            variables: [\n                'food_item'\n            ],\n            believabilityScore: 0.15\n        }\n    ],\n    environmental: [\n        {\n            id: 'env-001',\n            category: 'environmental',\n            template: 'Unexpected {weather_phenomenon} in my {location}',\n            variables: [\n                'weather_phenomenon',\n                'location'\n            ],\n            believabilityScore: 0.5\n        },\n        {\n            id: 'env-002',\n            category: 'environmental',\n            template: 'My {plant} achieved sentience and needed emotional support',\n            variables: [\n                'plant'\n            ],\n            believabilityScore: 0.1\n        },\n        {\n            id: 'env-003',\n            category: 'environmental',\n            template: 'Local {weather_phenomenon} caused my {transport} to malfunction',\n            variables: [\n                'weather_phenomenon',\n                'transport'\n            ],\n            believabilityScore: 0.6\n        },\n        {\n            id: 'env-004',\n            category: 'environmental',\n            template: 'Had to rescue my {pet} from a freak {weather_phenomenon} incident',\n            variables: [\n                'pet',\n                'weather_phenomenon'\n            ],\n            believabilityScore: 0.4\n        }\n    ],\n    social: [\n        {\n            id: 'social-001',\n            category: 'social',\n            template: 'My {pet} went viral on {platform} and I had to manage their PR',\n            variables: [\n                'pet',\n                'platform'\n            ],\n            believabilityScore: 0.3\n        },\n        {\n            id: 'social-002',\n            category: 'social',\n            template: 'Got caught in an endless {social_activity} loop with my {relative}',\n            variables: [\n                'social_activity',\n                'relative'\n            ],\n            believabilityScore: 0.4\n        },\n        {\n            id: 'social-003',\n            category: 'social',\n            template: 'Had to help {celebrity} with their {hobby} emergency',\n            variables: [\n                'celebrity',\n                'hobby'\n            ],\n            believabilityScore: 0.2\n        },\n        {\n            id: 'social-004',\n            category: 'social',\n            template: 'My {relative} started a {platform} trend that needed immediate attention',\n            variables: [\n                'relative',\n                'platform'\n            ],\n            believabilityScore: 0.35\n        }\n    ]\n};\nconst generateVariable = (type)=>{\n    const generator = generateVariables[type];\n    return generator ? generator() : type;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9saWIvY29uc3RhbnRzL2V4Y3VzZXMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ3dDO0FBRXhDLDJCQUEyQjtBQUMzQixNQUFNQyxtQkFBbUI7SUFDdkI7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0NBQ0Q7QUFFRCxrQ0FBa0M7QUFDbEMsTUFBTUMsb0JBQW9CO0lBQ3hCQyxLQUFLLElBQU1ILDhDQUFLQSxDQUFDSSxNQUFNLENBQUNDLElBQUk7SUFDNUJDLE1BQU0sSUFBTU4sOENBQUtBLENBQUNPLFFBQVEsQ0FBQ0MsT0FBTztJQUNsQ0MsWUFBWSxJQUFNVCw4Q0FBS0EsQ0FBQ1UsSUFBSSxDQUFDQyxTQUFTO0lBQ3RDQyxPQUFPLElBQU1aLDhDQUFLQSxDQUFDVSxJQUFJLENBQUNHLElBQUk7SUFDNUJDLFVBQVUsSUFBTWQsOENBQUtBLENBQUNjLFFBQVEsQ0FBQ0MsSUFBSTtJQUNuQ0MsUUFBUSxJQUFNaEIsOENBQUtBLENBQUNPLFFBQVEsQ0FBQ1UsV0FBVztJQUN4Q0MsUUFBUSxJQUFNbEIsOENBQUtBLENBQUNtQixPQUFPLENBQUNDLElBQUk7SUFDaENDLGlCQUFpQixJQUFNckIsOENBQUtBLENBQUNzQixNQUFNLENBQUNDLElBQUk7SUFDeENDLFVBQVUsSUFBTXhCLDhDQUFLQSxDQUFDSSxNQUFNLENBQUNDLElBQUk7SUFDakNvQixXQUFXLElBQU16Qiw4Q0FBS0EsQ0FBQ08sUUFBUSxDQUFDVSxXQUFXO0lBQzNDUyxnQkFBZ0IsSUFBTTFCLDhDQUFLQSxDQUFDTyxRQUFRLENBQUNVLFdBQVc7SUFDaERVLG9CQUFvQixJQUFNMUIsZ0JBQWdCLENBQUMyQixLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBSzdCLGlCQUFpQjhCLE1BQU0sRUFBRTtJQUMvRkMsT0FBTyxJQUFNaEMsOENBQUtBLENBQUNpQyxPQUFPLENB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YUFBUTtZQUNwQkMsb0JBQW9CO1FBQ3RCO1FBQ0E7WUFDRUosSUFBSTtZQUNKQyxVQUFVO1lBQ1ZDLFVBQVU7WUFDVkMsV0FBVztnQkFBQztnQkFBc0I7YUFBWTtZQUM5Q0Msb0JBQW9CO1FBQ3RCO1FBQ0E7WUFDRUosSUFBSTtZQUNKQyxVQUFVO1lBQ1ZDLFVBQVU7WUFDVkMsV0FBVztnQkFBQztnQkFBTzthQUFxQjtZQUN4Q0Msb0JBQW9CO1FBQ3RCO0tBQ0Q7SUFDREcsUUFBUTtRQUNOO1lBQ0VQLElBQUk7WUFDSkMsVUFBVTtZQUNWQyxVQUFVO1lBQ1ZDLFdBQVc7Z0JBQUM7Z0JBQU87YUFBVztZQUM5QkMsb0JBQW9CO1FBQ3RCO1FBQ0E7WUFDRUosSUFBSTtZQUNKQyxVQUFVO1lBQ1ZDLFVBQVU7WUFDVkMsV0FBVztnQkFBQztnQkFBbUI7YUFBVztZQUMxQ0Msb0JBQW9CO1FBQ3RCO1FBQ0E7WUFDRUosSUFBSTtZQUNKQyxVQUFVO1lBQ1ZDLFVBQVU7WUFDVkMsV0FBVztnQkFBQztnQkFBYTthQUFRO1lBQ2pDQyxvQkFBb0I7UUFDdEI7UUFDQTtZQUNFSixJQUFJO1lBQ0pDLFVBQVU7WUFDVkMsVUFBVTtZQUNWQyxXQUFXO2dCQUFDO2dCQUFZO2FBQVc7WUFDbkNDLG9CQUFvQjtRQUN0QjtLQUNEO0FBQ0gsRUFBRTtBQUVLLE1BQU1JLG1CQUFtQixDQUFDdEQ7SUFDL0IsTUFBTXVELFlBQVkxRCxpQkFBaUIsQ0FBQ0csS0FBdUM7SUFDM0UsT0FBT3VELFlBQVlBLGNBQWN2RDtBQUNuQyxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9saWIvY29uc3RhbnRzL2V4Y3VzZXMudHM/YjY5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFeGN1c2VUZW1wbGF0ZSwgRXhjdXNlQ2F0ZWdvcnkgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBmYWtlciB9IGZyb20gJ0BmYWtlci1qcy9mYWtlcic7XG5cbi8vIEN1c3RvbSB3ZWF0aGVyIHBoZW5vbWVuYVxuY29uc3Qgd2VhdGhlclBoZW5vbWVuYSA9IFtcbiAgJ3F1YW50dW0gc3Rvcm0nLFxuICAndGVtcG9yYWwgcmFpbicsXG4gICdwcm9iYWJpbGl0eSBmb2cnLFxuICAnZGltZW5zaW9uYWwgdm9ydGV4JyxcbiAgJ3JlYWxpdHkgZGlzdG9ydGlvbicsXG4gICdwYXJhZG94IHdhdmUnLFxuICAndGltZSB0c3VuYW1pJyxcbiAgJ2VudHJvcHkgYmxpenphcmQnLFxuICAnY29zbWljIGh1cnJpY2FuZScsXG4gICdxdWFudHVtIGxpZ2h0bmluZycsXG4gICdwYXJhbGxlbCB1bml2ZXJzZSBwcmVjaXBpdGF0aW9uJyxcbiAgJ3RpbWVsaW5lIHRvcm5hZG8nLFxuICAnY2F1c2FsaXR5IGN5Y2xvbmUnLFxuICAnc3BhY2UtdGltZSBhdXJvcmEnLFxuICAnbXVsdGl2ZXJzYWwgbWlzdCdcbl07XG5cbi8vIFZhcmlhYmxlIGdlbmVyYXRvcnMgdXNpbmcgZmFrZXJcbmNvbnN0IGdlbmVyYXRlVmFyaWFibGVzID0ge1xuICBwZXQ6ICgpID0+IGZha2VyLmFuaW1hbC50eXBlKCksXG4gIGl0ZW06ICgpID0+IGZha2VyLmNvbW1lcmNlLnByb2R1Y3QoKSxcbiAgdW5leHBlY3RlZDogKCkgPT4gZmFrZXIud29yZC5hZGplY3RpdmUoKSxcbiAgZXZlbnQ6ICgpID0+IGZha2VyLndvcmQubm91bigpLFxuICBsb2NhdGlvbjogKCkgPT4gZmFrZXIubG9jYXRpb24uY2l0eSgpLFxuICBkZXZpY2U6ICgpID0+IGZha2VyLmNvbW1lcmNlLnByb2R1Y3ROYW1lKCksXG4gIHN5c3RlbTogKCkgPT4gZmFrZXIuY29tcGFueS5uYW1lKCksXG4gIHRlY2huaWNhbF9pc3N1ZTogKCkgPT4gZmFrZXIuaGFja2VyLnZlcmIoKSxcbiAgY3JlYXR1cmU6ICgpID0+IGZha2VyLmFuaW1hbC50eXBlKCksXG4gIGFwcGxpYW5jZTogKCkgPT4gZmFrZXIuY29tbWVyY2UucHJvZHVjdE5hbWUoKSxcbiAgcG9zc2Vzc2VkX2l0ZW06ICgpID0+IGZha2VyLmNvbW1lcmNlLnByb2R1Y3ROYW1lKCksXG4gIHdlYXRoZXJfcGhlbm9tZW5vbjogKCkgPT4gd2VhdGhlclBoZW5vbWVuYVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB3ZWF0aGVyUGhlbm9tZW5hLmxlbmd0aCldLFxuICBwbGFudDogKCkgPT4gZmFrZXIuc2NpZW5jZS5jaGVtaWNhbEVsZW1lbnQoKSxcbiAgcGxhdGZvcm06ICgpID0+IGZha2VyLmNvbXBhbnkubmFtZSgpLFxuICBzb2NpYWxfYWN0aXZpdHk6ICgpID0+IGZha2VyLndvcmQudmVyYigpLFxuICByZWxhdGl2ZTogKCkgPT4gZmFrZXIucGVyc29uLmZpcnN0TmFtZSgpLFxuICB0cmFuc3BvcnQ6ICgpID0+IGZha2VyLnZlaGljbGUudmVoaWNsZSgpLFxuICB0ZWNoX2phcmdvbjogKCkgPT4gZmFrZXIuaGFja2VyLnBocmFzZSgpLFxuICBjZWxlYnJpdHk6ICgpID0+IGZha2VyLnBlcnNvbi5mdWxsTmFtZSgpLFxuICBmb29kX2l0ZW06ICgpID0+IGZha2VyLmNvbW1lcmNlLnByb2R1Y3QoKSxcbiAgaG9iYnk6ICgpID0+IGZha2VyLndvcmQudmVyYigpLFxuICBzbWFydF9kZXZpY2U6ICgpID0+IGZha2VyLmNvbW1lcmNlLnByb2R1Y3ROYW1lKCksXG59O1xuXG5leHBvcnQgY29uc3QgRVhDVVNFX1RFTVBMQVRFUzogUmVjb3JkPEV4Y3VzZUNhdGVnb3J5LCBFeGN1c2VUZW1wbGF0ZVtdPiA9IHtcbiAgY2xhc3NpYzogW1xuICAgIHtcbiAgICAgIGlkOiAnY2xhc3NpYy0wMDEnLFxuICAgICAgY2F0ZWdvcnk6ICdjbGFzc2ljJyxcbiAgICAgIHRlbXBsYXRlOiAnTXkge3BldH0gYXRlIG15IHtpdGVtfScsXG4gICAgICB2YXJpYWJsZXM6IFsncGV0JywgJ2l0ZW0nXSxcbiAgICAgIGJlbGlldmFiaWxpdHlTY29yZTogMC40LFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdjbGFzc2ljLTAwMicsXG4gICAgICBjYXRlZ29yeTogJ2NsYXNzaWMnLFxuICAgICAgdGVtcGxhdGU6ICdHb3Qgc3R1Y2sgaW4ge3VuZXhwZWN0ZWR9IHRyYWZmaWMgYmVjYXVzZSBvZiBhIHtldmVudH0nLFxuICAgICAgdmFyaWFibGVzOiBbJ3VuZXhwZWN0ZWQnLCAnZXZlbnQnXSxcbiAgICAgIGJlbGlldmFiaWxpdHlTY29yZTogMC43LFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdjbGFzc2ljLTAwMycsXG4gICAgICBjYXRlZ29yeTogJ2NsYXNzaWMnLFxuICAgICAgdGVtcGxhdGU6ICdNeSB7dHJhbnNwb3J0fSBicm9rZSBkb3duIGluIHRoZSBtaWRkbGUgb2Yge2xvY2F0aW9ufScsXG4gICAgICB2YXJpYWJsZXM6IFsndHJhbnNwb3J0JywgJ2xvY2F0aW9uJ10sXG4gICAgICBiZWxpZXZhYmlsaXR5U2NvcmU6IDAuOCxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnY2xhc3NpYy0wMDQnLFxuICAgICAgY2F0ZWdvcnk6ICdjbGFzc2ljJyxcbiAgICAgIHRlbXBsYXRlOiAnTG9zdCB0cmFjayBvZiB0aW1lIGhlbHBpbmcgbXkge3JlbGF0aXZlfSBtb3ZlIHRoZWlyIHtpdGVtfScsXG4gICAgICB2YXJpYWJsZXM6IFsncmVsYXRpdmUnLCAnaXRlbSddLFxuICAgICAgYmVsaWV2YWJpbGl0eVNjb3JlOiAwLjYsXG4gICAgfSxcbiAgXSxcbiAgJ3NjaS1maSc6IFtcbiAgICB7XG4gICAgICBpZDogJ3NjaWZpLTAwMScsXG4gICAgICBjYXRlZ29yeTogJ3NjaS1maScsXG4gICAgICB0ZW1wbGF0ZTogJ0hhZCB0byBwcmV2ZW50IGEgdGVtcG9yYWwgcGFyYWRveCBpbiB0aGUge2xvY2F0aW9ufSB0aW1lbGluZScsXG4gICAgICB2YXJpYWJsZXM6IFsnbG9jYXRpb24nXSxcbiAgICAgIGJlbGlldmFiaWxpdHlTY29yZTogMC4xLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdzY2lmaS0wMDInLFxuICAgICAgY2F0ZWdvcnk6ICdzY2ktZmknLFxuICAgICAgdGVtcGxhdGU6ICdNeSB7ZGV2aWNlfSBjcmVhdGVkIGEgcXVhbnR1bSBlbnRhbmdsZW1lbnQgd2l0aCBteSB7aXRlbX0nLFxuICAgICAgdmFyaWFibGVzOiBbJ2RldmljZScsICdpdGVtJ10sXG4gICAgICBiZWxpZXZhYmlsaXR5U2NvcmU6IDAuMixcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnc2NpZmktMDAzJyxcbiAgICAgIGNhdGVnb3J5OiAnc2NpLWZpJyxcbiAgICAgIHRlbXBsYXRlOiAnTXkge3NtYXJ0X2RldmljZX0gYWNoaWV2ZWQgc2VudGllbmNlIGFuZCBuZWVkZWQgZW1vdGlvbmFsIGNvdW5zZWxpbmcnLFxuICAgICAgdmFyaWFibGVzOiBbJ3NtYXJ0X2RldmljZSddLFxuICAgICAgYmVsaWV2YWJpbGl0eVNjb3JlOiAwLjEsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ3NjaWZpLTAwNCcsXG4gICAgICBjYXRlZ29yeTogJ3NjaS1maScsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2NvcnAtMDAzJyxcbiAgICAgIGNhdGVnb3J5OiAnY29ycG9yYXRlJyxcbiAgICAgIHRlbXBsYXRlOiAnSGFkIGFuIGVtZXJnZW5jeSB7dGVjaF9qYXJnb259IG1lZXRpbmcgd2l0aCB0aGUge3N5c3RlbX0gdGVhbScsXG4gICAgICB2YXJpYWJsZXM6IFsndGVjaF9qYXJnb24nLCAnc3lzdGVtJ10sXG4gICAgICBiZWxpZXZhYmlsaXR5U2NvcmU6IDAuNyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnY29ycC0wMDQnLFxuICAgICAgY2F0ZWdvcnk6ICdjb3Jwb3JhdGUnLFxuICAgICAgdGVtcGxhdGU6ICdUaGUge2RldmljZX0gaW50ZWdyYXRpb24gZmFpbGVkIGR1cmluZyB0aGUge3RlY2huaWNhbF9pc3N1ZX0gcGhhc2UnLFxuICAgICAgdmFyaWFibGVzOiBbJ2RldmljZScsICd0ZWNobmljYWxfaXNzdWUnXSxcbiAgICAgIGJlbGlldmFiaWxpdHlTY29yZTogMC43NSxcbiAgICB9LFxuICBdLFxuICBzdXBlcm5hdHVyYWw6IFtcbiAgICB7XG4gICAgICBpZDogJ3N1cGVyLTAwMScsXG4gICAgICBjYXRlZ29yeTogJ3N1cGVybmF0dXJhbCcsXG4gICAgICB0ZW1wbGF0ZTogJ0Ege2NyZWF0dXJlfSB3YXMgaGF1bnRpbmcgbXkge2FwcGxpYW5jZX0nLFxuICAgICAgdmFyaWFibGVzOiBbJ2NyZWF0dXJlJywgJ2FwcGxpYW5jZSddLFxuICAgICAgYmVsaWV2YWJpbGl0eVNjb3JlOiAwLjEsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ3N1cGVyLTAwMicsXG4gICAgICBjYXRlZ29yeTogJ3N1cGVybmF0dXJhbCcsXG4gICAgICB0ZW1wbGF0ZTogJ0hhZCB0byBwZXJmb3JtIGFuIGVtZXJnZW5jeSBleG9yY2lzbSBvbiBteSB7cG9zc2Vzc2VkX2l0ZW19JyxcbiAgICAgIHZhcmlhYmxlczogWydwb3NzZXNzZWRfaXRlbSddLFxuICAgICAgYmVsaWV2YWJpbGl0eVNjb3JlOiAwLjIsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ3N1cGVyLTAwMycsXG4gICAgICBjYXRlZ29yeTogJ3N1cGVybmF0dXJhbCcsXG4gICAgICB0ZW1wbGF0ZTogJ015IHtpdGVtfSBzdGFydGVkIHByZWRpY3RpbmcgdGhlIGZ1dHVyZSBhbmQgbmVlZGVkIHJlY2FsaWJyYXRpb24nLFxuICAgICAgdmFyaWFibGVzOiBbJ2l0ZW0nXSxcbiAgICAgIGJlbGlldmFiaWxpdHlTY29yZTogMC4xLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdzdXBlci0wMDQnLFxuICAgICAgY2F0ZWdvcnk6ICdzdXBlcm5hdHVyYWwnLFxuICAgICAgdGVtcGxhdGU6ICdHb3Qgc3R1Y2sgaW4gYSB0aW1lIGxvb3Agd2hpbGUgbWFraW5nIHtmb29kX2l0ZW19JyxcbiAgICAgIHZhcmlhYmxlczogWydmb29kX2l0ZW0nXSxcbiAgICAgIGJlbGlldmFiaWxpdHlTY29yZTogMC4xNSxcbiAgICB9LFxuICBdLFxuICBlbnZpcm9ubWVudGFsOiBbXG4gICAge1xuICAgICAgaWQ6ICdlbnYtMDAxJyxcbiAgICAgIGNhdGVnb3J5OiAnZW52aXJvbm1lbnRhbCcsXG4gICAgICB0ZW1wbGF0ZTogJ1VuZXhwZWN0ZWQge3dlYXRoZXJfcGhlbm9tZW5vbn0gaW4gbXkge2xvY2F0aW9ufScsXG4gICAgICB2YXJpYWJsZXM6IFsnd2VhdGhlcl9waGVub21lbm9uJywgJ2xvY2F0aW9uJ10sXG4gICAgICBiZWxpZXZhYmlsaXR5U2NvcmU6IDAuNSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnZW52LTAwMicsXG4gICAgICBjYXRlZ29yeTogJ2Vudmlyb25tZW50YWwnLFxuICAgICAgdGVtcGxhdGU6ICdNeSB7cGxhbnR9IGFjaGlldmVkIHNlbnRpZW5jZSBhbmQgbmVlZGVkIGVtb3Rpb25hbCBzdXBwb3J0JyxcbiAgICAgIHZhcmlhYmxlczogWydwbGFudCddLFxuICAgICAgYmVsaWV2YWJpbGl0eVNjb3JlOiAwLjEsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2Vudi0wMDMnLFxuICAgICAgY2F0ZWdvcnk6ICdlbnZpcm9ubWVudGFsJyxcbiAgICAgIHRlbXBsYXRlOiAnTG9jYWwge3dlYXRoZXJfcGhlbm9tZW5vbn0gY2F1c2VkIG15IHt0cmFuc3BvcnR9IHRvIG1hbGZ1bmN0aW9uJyxcbiAgICAgIHZhcmlhYmxlczogWyd3ZWF0aGVyX3BoZW5vbWVub24nLCAndHJhbnNwb3J0J10sXG4gICAgICBiZWxpZXZhYmlsaXR5U2NvcmU6IDAuNixcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnZW52LTAwNCcsXG4gICAgICBjYXRlZ29yeTogJ2Vudmlyb25tZW50YWwnLFxuICAgICAgdGVtcGxhdGU6ICdIYWQgdG8gcmVzY3VlIG15IHtwZXR9IGZyb20gYSBmcmVhayB7d2VhdGhlcl9waGVub21lbm9ufSBpbmNpZGVudCcsXG4gICAgICB2YXJpYWJsZXM6IFsncGV0JywgJ3dlYXRoZXJfcGhlbm9tZW5vbiddLFxuICAgICAgYmVsaWV2YWJpbGl0eVNjb3JlOiAwLjQsXG4gICAgfSxcbiAgXSxcbiAgc29jaWFsOiBbXG4gICAge1xuICAgICAgaWQ6ICdzb2NpYWwtMDAxJyxcbiAgICAgIGNhdGVnb3J5OiAnc29jaWFsJyxcbiAgICAgIHRlbXBsYXRlOiAnTXkge3BldH0gd2VudCB2aXJhbCBvbiB7cGxhdGZvcm19IGFuZCBJIGhhZCB0byBtYW5hZ2UgdGhlaXIgUFInLFxuICAgICAgdmFyaWFibGVzOiBbJ3BldCcsICdwbGF0Zm9ybSddLFxuICAgICAgYmVsaWV2YWJpbGl0eVNjb3JlOiAwLjMsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ3NvY2lhbC0wMDInLFxuICAgICAgY2F0ZWdvcnk6ICdzb2NpYWwnLFxuICAgICAgdGVtcGxhdGU6ICdHb3QgY2F1Z2h0IGluIGFuIGVuZGxlc3Mge3NvY2lhbF9hY3Rpdml0eX0gbG9vcCB3aXRoIG15IHtyZWxhdGl2ZX0nLFxuICAgICAgdmFyaWFibGVzOiBbJ3NvY2lhbF9hY3Rpdml0eScsICdyZWxhdGl2ZSddLFxuICAgICAgYmVsaWV2YWJpbGl0eVNjb3JlOiAwLjQsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ3NvY2lhbC0wMDMnLFxuICAgICAgY2F0ZWdvcnk6ICdzb2NpYWwnLFxuICAgICAgdGVtcGxhdGU6ICdIYWQgdG8gaGVscCB7Y2VsZWJyaXR5fSB3aXRoIHRoZWlyIHtob2JieX0gZW1lcmdlbmN5JyxcbiAgICAgIHZhcmlhYmxlczogWydjZWxlYnJpdHknLCAnaG9iYnknXSxcbiAgICAgIGJlbGlldmFiaWxpdHlTY29yZTogMC4yLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdzb2NpYWwtMDA0JyxcbiAgICAgIGNhdGVnb3J5OiAnc29jaWFsJyxcbiAgICAgIHRlbXBsYXRlOiAnTXkge3JlbGF0aXZlfSBzdGFydGVkIGEge3BsYXRmb3JtfSB0cmVuZCB0aGF0IG5lZWRlZCBpbW1lZGlhdGUgYXR0ZW50aW9uJyxcbiAgICAgIHZhcmlhYmxlczogWydyZWxhdGl2ZScsICdwbGF0Zm9ybSddLFxuICAgICAgYmVsaWV2YWJpbGl0eVNjb3JlOiAwLjM1LFxuICAgIH0sXG4gIF0sXG59O1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVWYXJpYWJsZSA9ICh0eXBlOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgZ2VuZXJhdG9yID0gZ2VuZXJhdGVWYXJpYWJsZXNbdHlwZSBhcyBrZXlvZiB0eXBlb2YgZ2VuZXJhdGVWYXJpYWJsZXNdO1xuICByZXR1cm4gZ2VuZXJhdG9yID8gZ2VuZXJhdG9yKCkgOiB0eXBlO1xufTtcbiJdLCJuYW1lcyI6WyJmYWtlciIsIndlYXRoZXJQaGVub21lbmEiLCJnZW5lcmF0ZVZhcmlhYmxlcyIsInBldCIsImFuaW1hbCIsInR5cGUiLCJpdGVtIiwiY29tbWVyY2UiLCJwcm9kdWN0IiwidW5leHBlY3RlZCIsIndvcmQiLCJhZGplY3RpdmUiLCJldmVudCIsIm5vdW4iLCJsb2NhdGlvbiIsImNpdHkiLCJkZXZpY2UiLCJwcm9kdWN0TmFtZSIsInN5c3RlbSIsImNvbXBhbnkiLCJuYW1lIiwidGVjaG5pY2FsX2lzc3VlIiwiaGFja2VyIiwidmVyYiIsImNyZWF0dXJlIiwiYXBwbGlhbmNlIiwicG9zc2Vzc2VkX2l0ZW0iLCJ3ZWF0aGVyX3BoZW5vbWVub24iLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJwbGFudCIsInNjaWVuY2UiLCJjaGVtaWNhbEVsZW1lbnQiLCJwbGF0Zm9ybSIsInNvY2lhbF9hY3Rpdml0eSIsInJlbGF0aXZlIiwicGVyc29uIiwiZmlyc3ROYW1lIiwidHJhbnNwb3J0IiwidmVoaWNsZSIsInRlY2hfamFyZ29uIiwicGhyYXNlIiwiY2VsZWJyaXR5IiwiZnVsbE5hbWUiLCJmb29kX2l0ZW0iLCJob2JieSIsInNtYXJ0X2RldmljZSIsIkVYQ1VTRV9URU1QTEFURVMiLCJjbGFzc2ljIiwiaWQiLCJjYXRlZ29yeSIsInRlbXBsYXRlIiwidmFyaWFibGVzIiwiYmVsaWV2YWJpbGl0eVNjb3JlIiwic3VwZXJuYXR1cmFsIiwiZW52aXJvbm1lbnRhbCIsInNvY2lhbCIsImdlbmVyYXRlVmFyaWFibGUiLCJnZW5lcmF0b3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/lib/constants/excuses.ts\n"));

/***/ })

});