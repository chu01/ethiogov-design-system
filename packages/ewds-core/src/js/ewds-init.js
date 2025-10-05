/* eslint-disable no-var */
(function ewdsInit() {
  "use strict";

  var loadingClass = "ethio-js-loading";
  var fallback;

  document.documentElement.classList.add(loadingClass);
  function revertClass() {
    document.documentElement.classList.remove(loadingClass);
  }

  fallback = setTimeout(revertClass, 8000);

  function verifyLoaded() {
    if (window.ewdsPresent) {
      clearTimeout(fallback);
      revertClass();
      window.removeEventListener("load", verifyLoaded, true);
    }
  }

  window.addEventListener("load", verifyLoaded, true);
})();
