/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./src/styles/style.css":
      /*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        // extracted by mini-css-extract-plugin

        /***/
      },

    /***/ "./src/assets/svg/codebox.svg":
      /*!************************************!*\
  !*** ./src/assets/svg/codebox.svg ***!
  \************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__.p + "img/codebox.svg";

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/global */
  /******/ (() => {
    /******/ __webpack_require__.g = (function () {
      /******/ if (typeof globalThis === "object") return globalThis;
      /******/ try {
        /******/ return this || new Function("return this")();
        /******/
      } catch (e) {
        /******/ if (typeof window === "object") return window;
        /******/
      }
      /******/
    })();
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/publicPath */
  /******/ (() => {
    /******/ var scriptUrl;
    /******/ if (__webpack_require__.g.importScripts)
      scriptUrl = __webpack_require__.g.location + "";
    /******/ var document = __webpack_require__.g.document;
    /******/ if (!scriptUrl && document) {
      /******/ if (document.currentScript)
        /******/ scriptUrl = document.currentScript.src;
      /******/ if (!scriptUrl) {
        /******/ var scripts = document.getElementsByTagName("script");
        /******/ if (scripts.length) {
          /******/ var i = scripts.length - 1;
          /******/ while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
          /******/
        }
        /******/
      }
      /******/
    }
    /******/ // When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
    /******/ // or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
    /******/ if (!scriptUrl)
      throw new Error("Automatic publicPath is not supported in this browser");
    /******/ scriptUrl = scriptUrl
      .replace(/#.*$/, "")
      .replace(/\?.*$/, "")
      .replace(/\/[^\/]+$/, "/");
    /******/ __webpack_require__.p = scriptUrl + "../";
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
    /*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");
    /* harmony import */ var _assets_svg_codebox_svg__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(
        /*! ../assets/svg/codebox.svg */ "./src/assets/svg/codebox.svg"
      );
    // Console:
    console.log("Index JS loaded successfully");

    // ? IMPORTS
    // This is a collection of files to import

    // Stylesheet

    // Assets

    // % METHOD SOLUTIONS:

    // * Insert Adjacent HTML = insertAdjacentHTML()n

    // ? HTML - HEAD
    // This formular is to insert content into <head> element

    // Select the <head></head> section:
    const head = document.querySelector("head");

    // Insert content to <head></head>:
    head.insertAdjacentHTML(
      "beforeend",
      `
    <meta name="description" content="This is a web application tool." />
    
    <!-- Favicon -->
    <link rel="icon" type="images/x-icon" href="./img/codebox.svg" />
    
    <!-- Fonts -->
    <script src="https://kit.fontawesome.com/95e9008956.js" crossorigin="anonymous"></script>
    
    <!-- Internal Stylesheet -->
    <style type="text/css">
        body {
        background-color: #22223f;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: verdana;
        font-weight: bold;

        margin: 0;
        padding: 0;
        
        height: 100vh;
        width: 100%;
        }  
    </style>
    
    <!-- Internal Script -->
    <script type="text/javascript">
        console.log("Script Loaded Successfully!");
    </script>

    <!-- External Script -->
    <script src="./js/main.js"></script>
    
`
    );

    // TODO: Insert accordingly.
    // <!-- External Stylesheet -->
    // <link rel="stylesheet" href="../src/styles/style.css"></link>

    // ? HTML - HEAD  ----------END!

    // ? HTML - BODY
    // This formular is to insert content into <body> element

    // Select the <body></body> section:
    const body = document.querySelector("body");

    body.insertAdjacentHTML(
      "afterbegin",
      `
  <main>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" id="svg" fill="#fff"><path d="M450-154v-309L180-619v309l270 156Zm60 0 270-156v-310L510-463.162V-154Zm-30-360 266-155-266-154-267 154 267 155ZM150-258q-14.25-8.426-22.125-22.213T120-310v-340q0-16 7.875-29.787Q135.75-693.574 150-702l300-173q14.328-8 30.164-8Q496-883 510-875l300 173q14.25 8.426 22.125 22.213T840-650v340q0 16-7.875 29.787Q824.25-266.426 810-258L510-85q-14.328 8-30.164 8Q464-77 450-85L150-258Zm330-222Z"/></svg>
    <h1>THE WEBSITE</h1>
    <p>This is a web application assistant for development!</p>
  </div>
  </main>
  <footer><span>&copy; S-EP 2023</span></footer>
  
  `
    );

    // ? HTML - BODY  --------END!
  })();

  /******/
})();
//# sourceMappingURL=bundle.js.map
