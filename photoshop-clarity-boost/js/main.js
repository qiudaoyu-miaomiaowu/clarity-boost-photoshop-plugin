(function () {
  "use strict";

  var cs = new CSInterface();
  var controls = {
    mode: document.getElementById("mode"),
    amount: document.getElementById("amount"),
    amountValue: document.getElementById("amountValue"),
    radius: document.getElementById("radius"),
    radiusValue: document.getElementById("radiusValue"),
    protectColor: document.getElementById("protectColor"),
    keepEditable: document.getElementById("keepEditable"),
    enhanceButton: document.getElementById("enhanceButton"),
    undoButton: document.getElementById("undoButton"),
    status: document.getElementById("status")
  };

  function setStatus(message, isError) {
    controls.status.textContent = message;
    controls.status.className = isError ? "status error" : "status";
  }

  function updateLabels() {
    controls.amountValue.textContent = controls.amount.value + "%";
    controls.radiusValue.textContent = (Number(controls.radius.value) / 10).toFixed(1) + " px";
  }

  function escapeForExtendScript(value) {
    return String(value).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  }

  function getSettings() {
    return {
      mode: controls.mode.value,
      amount: Number(controls.amount.value),
      radius: Number(controls.radius.value) / 10,
      protectColor: controls.protectColor.checked,
      keepEditable: controls.keepEditable.checked
    };
  }

  function runEnhance() {
    var payload = JSON.stringify(getSettings());
    controls.enhanceButton.disabled = true;
    setStatus("正在处理当前图层...");

    cs.evalScript('ClarityBoost.run("' + escapeForExtendScript(payload) + '")', function (result) {
      controls.enhanceButton.disabled = false;
      if (!result || result.indexOf("ERROR:") === 0 || result === "CEP_NOT_AVAILABLE") {
        setStatus(result === "CEP_NOT_AVAILABLE" ? "请在 Photoshop CEP 面板中运行此插件。" : result, true);
        return;
      }
      setStatus(result);
    });
  }

  function undoLastStep() {
    cs.evalScript("ClarityBoost.undo()", function (result) {
      if (!result || result.indexOf("ERROR:") === 0) {
        setStatus(result, true);
        return;
      }
      setStatus(result);
    });
  }

  controls.amount.addEventListener("input", updateLabels);
  controls.radius.addEventListener("input", updateLabels);
  controls.enhanceButton.addEventListener("click", runEnhance);
  controls.undoButton.addEventListener("click", undoLastStep);
  updateLabels();
})();
