// rollup.config.js
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";

export default [
  // JS bundle
  {
    input: "src/index.js",
    output: {
      file: "dist/js/ethio.js",
      format: "umd",
      name: "EthiogovDesignSystem",
    },
    plugins: [resolve(), commonjs()],
  },

  // CSS bundle
  {
    input: "src/scss/main.scss",
    output: {
      file: "dist/css/styles.css",
    },
    plugins: [
      postcss({
        extract: "dist/css/styles.css", // output css
        minimize: true,
        sourceMap: true,
      }),
    ],
  },
];
