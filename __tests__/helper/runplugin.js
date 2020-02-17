const postcss = require('postcss');
const stylelint = require('stylelint');
const path = require('path');

const run = (css) =>
  postcss([
    stylelint({
      configBasedir: path.join(__dirname, '../../'),
      rules: {
        'cssnano-ignore-plugin/no-wrong-line-comment': true,
      },
      plugins: ['./src'],
    }),
  ])
    .process(css)
    .then((res) => res.messages);

module.exports = run;
