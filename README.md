# eslint-plugin-template-string

custom ESLint rule, use template string instead of `+` string.

## Rule Details

### template-string

should use template string instead of concat string with `+`.

The following patterns are considered warnings:

```js
'a' + 'b'
'a' + 1
'a' + true
'a' + null
'a' + undefined
'a' + [1]

var f = function(){};
'a' + f

var o = { a: 'a' };
'a' + o
```

The following patterns are not warnings:

```js
`${a}:${b}`
```

## Usage

```yaml
plugins:
  - template-string

rules:
  # Plugins
  template-string/template-string  : 2
```

## License

MIT
