const behavior = require("../../ewds-core/src/js/utils/behavior");
const toggleFormInput = require("../../ewds-core/src/js/utils/toggle-form-input");

const { CLICK } = require("../../ewds-core/src/js/events");
const { prefix: PREFIX } = require("../../ewds-core/src/js/config");

const LINK = `.${PREFIX}-show-password`;

function toggle(event) {
  event.preventDefault();
  toggleFormInput(this);
}

module.exports = behavior({
  [CLICK]: {
    [LINK]: toggle,
  },
});
