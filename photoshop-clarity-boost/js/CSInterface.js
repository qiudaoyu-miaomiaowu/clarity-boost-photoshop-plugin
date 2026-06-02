/* Minimal CSInterface wrapper for CEP panels. */
(function () {
  "use strict";

  function CSInterface() {}

  CSInterface.prototype.evalScript = function (script, callback) {
    if (!window.__adobe_cep__) {
      if (callback) {
        callback("CEP_NOT_AVAILABLE");
      }
      return;
    }
    window.__adobe_cep__.evalScript(script, callback);
  };

  CSInterface.prototype.getHostEnvironment = function () {
    if (!window.__adobe_cep__) {
      return null;
    }
    return JSON.parse(window.__adobe_cep__.getHostEnvironment());
  };

  window.CSInterface = CSInterface;
})();
