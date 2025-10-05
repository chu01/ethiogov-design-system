window.ewdsPresent = true; // GLOBAL variable to indicate that the ewds.js has loaded in the DOM.

const ewds = require("./config");

const components = require("./index");

ewds.components = components;

const initComponents = () => {
  const target = document.body;
  Object.keys(components).forEach((key) => {
    const behavior = components[key];
    behavior.on(target);
  });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initComponents, { once: true });
} else {
  initComponents();
}

exports.default = ewds;
exports.initComponents = initComponents;
