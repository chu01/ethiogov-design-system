import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import sass from 'sass';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js', // your main JS entry
  output: {
    file: 'dist/js/ethio.js', // output JS
    format: 'esm', // ES module
    sourcemap: true,
  },
  plugins: [
    resolve(),
    commonjs(),
    postcss({
      extract: 'dist/css/ethio.css', // output CSS
      minimize: true,
      sourceMap: true,
      use: [
        ['sass', { implementation: sass }] // force Dart Sass
      ],
    }),
    terser() // optional: minify JS
  ],
};