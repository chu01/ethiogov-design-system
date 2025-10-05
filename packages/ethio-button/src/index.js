const keymap = require("../../ewds-core/src/js/utils/keymap");
const behavior = require("../../ewds-core/src/js/utils/behavior");

const ANCHOR_BUTTON = `a[class*="ethio-button"]`;

const toggleButton = (event) => {
  event.preventDefault();
  event.target.click();
};

const anchorButton = behavior({
  keydown: {
    [ANCHOR_BUTTON]: keymap({
      " ": toggleButton,
    }),
  },
});

module.exports = anchorButton;
