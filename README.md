# ember-temporal

This addon aims to provide ember specific tooling for the TC39
[proposal-temporal](https://github.com/tc39/proposal-temporal).
For this it embeds the
[Temporal Polyfill](https://www.npmjs.com/package/@js-temporal/polyfill).

While using the polyfill in ember with
[`ember-auto-import`](https://www.npmjs.com/package/ember-auto-import)
is trivial, there remain 2 Areas where a little ember specific tooling is
nice:

- This addon provides a `temporal-format` helper to format any Temporal and a
  `temporal` Service that allows easy global customization of options and the
  local to work nicely with tools like `ember-intl`.
- This addon provides `ember-data` transforms for the temporal datatypes.

## Compatibility

* Ember.js v4.4 or above
* Ember CLI v4.4 or above
* Node.js v16 or above


## Installation

```
ember install ember-temporal
```


## Usage

## Helpers

### `temporal-format`

The first parameter of the helper will always be the value.
A locale can be provided as second parameter or as `locales` or `locale`.
Options can be provided as third parameter or `options`. In this case the
options will be used and overwrite all default options.
However individual options can also be provided, which will be merged with
the default options. The default options can be changed on the `temporal`
service.

#### Examples:

```js
import { Temporal } from '@js-temporal/polyfill';
...
get value() {
  return Temporal.Instant.from('1969-07-03T20:17Z')
}
```

```hbs
{{temporal-format value}}
{{temporal-format value locale="de-DE"}}
{{temporal-format value locale="de-DE" day="2-digit"}}
{{temporal-format value locale="de-DE" options=(hash day="2-digit")}}
```

## Transforms

The following transforms are provided:

- `temporal-duration`
- `temporal-instant`
- `temporal-plain-date`
- `temporal-plain-date-time`
- `temporal-plain-month-day`
- `temporal-plain-time`
- `temporal-plain-year-month`
- `temporal-zoned-date-time`


## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.


## License

This project is licensed under the [MIT License](LICENSE.md).
