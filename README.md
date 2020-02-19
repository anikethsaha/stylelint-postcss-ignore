# stylelint-postcss-ignore

![CI tests](https://github.com/anikethsaha/stylelint-postcss-ignore/workflows/CI%20tests/badge.svg?branch=master&event=push)

Stylelint plugin for using [`postcss-ignore-plugin`](https://github.com/anikethsaha/postcss-ignore-plugin) without any issues

### Donation 

<a href="https://www.buymeacoffee.com/eydPs6n" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important;" ></a>

## Install

```shell
npm install stylelint stylelint-postcss-ignore  --save-dev
```

## Usage

Add this config to your .stylelintrc or stylelint config inside package.json:

```json
{
  "plugins": ["stylelint-postcss-ignore"],
  "rules": {
    "stylelint-postcss-ignore/no-wrong-line-comment": true
  }
}
```

## Detail

```css
/* postcss-ignore-line */
ul li {
  color: red;
}
```

You will get errors as

```css
/* postcss-ignore-line */
/**           ^^^^^^
 *"postcss-ignore-line comment written for wrong node type 'rule' i.e 'ul li' at line 2:3 (postcss-ignore-plugin/no-wrong-line-comment)" */
```

## Rules

- [`no-wrong-line-comment`](https://github.com/anikethsaha/stylelint-postcss-ignore/blob/master/src/rules/no-wrong-line-comment.js) : to throw error whenever the comment `/* postcss-ignore-line */`
  is written over `selector` or `atRules` i.e not over `declaration` type (eg 'color:red')
