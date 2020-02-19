const postcss = require('postcss');
const stylelint = require('stylelint');
const path = require('path');

const run = (css) =>
  postcss([
    stylelint({
      configBasedir: path.join(__dirname, '../../'),
      rules: {
        'stylelint-postcss-ignore/no-wrong-line-comment': true,
      },
      plugins: ['./src'],
    }),
  ])
    .process(css)
    .then((res) => res.messages);

module.exports = run;
