#target photoshop

var ClarityBoost = ClarityBoost || {};

ClarityBoost._settings = null;

ClarityBoost.parseSettings = function (settingsJson) {
  if (typeof JSON !== "undefined" && JSON.parse) {
    return JSON.parse(settingsJson);
  }
  return eval("(" + settingsJson + ")");
};

ClarityBoost.ensureDocument = function () {
  if (!app.documents.length) {
    throw new Error("请先打开一张图片。");
  }
};

ClarityBoost.applyHighPass = function (radius) {
  var desc = new ActionDescriptor();
  desc.putUnitDouble(charIDToTypeID("Rds "), charIDToTypeID("#Pxl"), radius);
  executeAction(charIDToTypeID("HghP"), desc, DialogModes.NO);
};

ClarityBoost.applyDesaturate = function () {
  try {
    app.activeDocument.activeLayer.desaturate();
  } catch (err) {
    // Some layer types cannot be desaturated. The clarity pass can still run.
  }
};

ClarityBoost.blendModeFor = function (mode) {
  if (mode === "detail") {
    return BlendMode.SOFTLIGHT;
  }
  if (mode === "strong") {
    return BlendMode.HARDLIGHT;
  }
  return BlendMode.OVERLAY;
};

ClarityBoost.unsharpAmountFor = function (settings) {
  if (settings.mode === "detail") {
    return Math.max(40, Math.min(180, settings.amount + 45));
  }
  if (settings.mode === "strong") {
    return Math.max(80, Math.min(220, settings.amount + 80));
  }
  return Math.max(25, Math.min(120, settings.amount));
};

ClarityBoost.process = function () {
  var settings = ClarityBoost._settings;
  var doc = app.activeDocument;
  var source = doc.activeLayer;
  var radius = Math.max(0.5, Math.min(8, Number(settings.radius) || 2));
  var opacity = Math.max(10, Math.min(100, Number(settings.amount) || 55));

  var clarityLayer = source.duplicate();
  clarityLayer.name = "Clarity Boost - " + settings.mode;
  doc.activeLayer = clarityLayer;

  if (settings.mode === "detail") {
    clarityLayer.applyUnSharpMask(ClarityBoost.unsharpAmountFor(settings), Math.max(0.4, radius * 0.55), 0);
    clarityLayer.opacity = opacity;
    clarityLayer.blendMode = BlendMode.LUMINOSITY;
  } else {
    ClarityBoost.applyHighPass(radius);
    if (settings.protectColor) {
      ClarityBoost.applyDesaturate();
    }
    clarityLayer.opacity = opacity;
    clarityLayer.blendMode = ClarityBoost.blendModeFor(settings.mode);
  }

  if (!settings.keepEditable) {
    clarityLayer.merge();
  }

  return "已完成清晰度增强。可在图层面板中调整增强图层透明度。";
};

ClarityBoost.run = function (settingsJson) {
  try {
    ClarityBoost.ensureDocument();
    ClarityBoost._settings = ClarityBoost.parseSettings(settingsJson);
    app.activeDocument.suspendHistory("Clarity Boost", "ClarityBoost.process()");
    return "已完成清晰度增强。";
  } catch (err) {
    return "ERROR: " + err.message;
  }
};

ClarityBoost.undo = function () {
  try {
    ClarityBoost.ensureDocument();
    executeAction(charIDToTypeID("undo"), undefined, DialogModes.NO);
    return "已撤销上一步。";
  } catch (err) {
    return "ERROR: " + err.message;
  }
};
