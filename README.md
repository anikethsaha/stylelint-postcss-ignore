# stylelint-cssnano-ignore
Stylelint plugin for using [`cssnano-ignore-plugin`](https://github.com/anikethsaha/stylelint-cssnano-ignore) without any issues

## Install 

```shell
npm install stylelint stylelint-cssnano-ignore  --save-dev
```

## Usage

Add this config to your .stylelintrc or stylelint config inside package.json:

```json
{
  "plugins": ["stylelint-cssnano-ignore"],
  "rules": {
        "cssnano-ignore-plugin/no-wrong-line-comment": true,
   },
}
```

## Detail

```css
  /* cssnano-ignore-line */
ul li{ color : red }

```
You will get errors as 

```css
/* cssnano-ignore-line */
/**           ^^^^^^
 *"cssnano-ignore-line comment written for wrong node type 'rule' i.e 'ul li' at line 2:3 (cssnano-ignore-plugin/no-wrong-line-comment)" */
```

## Rules

- [`no-wrong-line-comment`](https://github.com/anikethsaha/stylelint-cssnano-ignore/blob/master/src/rules/no-wrong-line-comment.js) : to throw error whenever the comment `/* cssnano-ignore-line */`
is written over `selector` or `atRules` i.e not over `declaration` type (eg 'color:red')
