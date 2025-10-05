const { src } = require("gulp");
const mocha = require("gulp-mocha");

const mochaConfig = {
  config: "packages/ewds-core/src/js/utils/test/.mocharc.json",
};

// Export our tasks.
module.exports = {
  // run unit test.
  unitTests() {
    return src([
      // Component tests.
      "packages/usa-*/**/*.spec.js",
      // Core utils tests.
      "packages/ewds-*/**/*.spec.js",
      // SASS unit tests, run separately.
      "!packages/ewds-core/src/test/sass.spec.js",
    ]).pipe(mocha(mochaConfig));
  },

  sassTests() {
    return src("packages/ewds-core/src/test/sass.spec.js").pipe(mocha());
  },
};
