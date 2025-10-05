/* eslint-disable arrow-body-style */
const { src, dest, series } = require("gulp");
const svgSprite = require("gulp-svgstore");
const rename = require("gulp-rename");
const del = require("del");
const dutil = require("./utils/doc-util");
const { logError } = require('./utils/doc-util');
const { copyIcons } = require("./copy");
const iconConfig = require("../packages/ethio-icon/src/ethio-icons.config");

const svgPath = "dist/img";

function cleanIcons() {
  return del(`${svgPath}/ethio-icons`);
}

function collectIcons() {
  dutil.logMessage("collectIcons", "Collecting default icon set in dist/img/ethio-icons");
  return src([
    `node_modules/@material-design-icons/svg/filled/{${iconConfig.material}}.svg`,
    `packages/ethio-icon/src/img/material-icons-deprecated/{${iconConfig.materialDeprecated}}.svg`,
    `packages/ethio-icon/src/img/ethio-icons/{${iconConfig.ewds}}.svg`,
  ])
    .pipe(dest(`${svgPath}/ethio-icons`))
}

function buildSprite(done) {
  return (
    src(`${svgPath}/ethio-icons/*.svg`)
      .pipe(svgSprite())
      .on("error", logError)
      .pipe(dest(svgPath))
      .on("end", () => done())
  );
}

function renameSprite() {
  return src(`${svgPath}/ethio-icons.svg`)
    .pipe(rename(`${svgPath}/sprite.svg`))
    .pipe(dest(`./`));
}

function cleanSprite() {
  return del(`${svgPath}/ethio-icons.svg`);
}

exports.buildSpriteStandalone = series(
  copyIcons,
  cleanIcons,
  collectIcons,
  buildSprite,
  renameSprite,
  cleanSprite
)

exports.buildSprite = series(
  cleanIcons,
  collectIcons,
  buildSprite,
  renameSprite,
  cleanSprite
)
