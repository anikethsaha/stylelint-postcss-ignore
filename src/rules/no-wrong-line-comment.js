let stylelint = require('stylelint');

let ruleName = 'stylelint-postcss-ignore/no-wrong-line-comment';
let messages = stylelint.utils.ruleMessages(ruleName, {
  expected: function(value) {
    return `postcss-ignore-line comment written for wrong node type ${value}`;
  },
});

module.exports = stylelint.createPlugin(ruleName, function(enable) {
  if (!enable) {
    return;
  }
  return function(root, result) {
    let commentsIgnoredLineData = [];

    root.walk((node) => {
      if (node.type === 'comment' && node.text === 'postcss-ignore-line') {
        let commentData = {
          commentedLine: node.source.start.line,
          ignoredLine: node.source.start.line + 1,
        };
        commentsIgnoredLineData.push(commentData);
      }
    });
    root.walk((node) => {
      commentsIgnoredLineData.map((ig) => {
        if (ig.ignoredLine === node.source.start.line) {
          if (node.type !== 'decl') {
            // STYLELINT THROW ERROR HERE
            stylelint.utils.report({
              result,
              ruleName,
              message: messages.expected(
                `'${node.type}' i.e '${node.selector || node.name}' at line ${
                  node.source.start.line
                }:${node.source.start.column}`
              ),
              node: node,
              word: node.value,
            });
          }
        }
      });
    });
  };
});

module.exports.ruleName = ruleName;
module.exports.messages = messages;
