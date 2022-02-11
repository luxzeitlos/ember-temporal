import Helper from '@ember/component/helper';
import { inject as service } from '@ember/service';

export default class TemporalFormat extends Helper {
  @service temporal;

  compute([value, ...positional], named) {
    const locales =
      named.locales ?? named.locale ?? positional[0] ?? this.temporal.locales;
    delete named.locale;
    delete named.locales;

    let options;
    if (named.options || positional[1]) {
      options = named.options ?? positional[1];
    } else {
      options = {
        ...this.temporal.getOptions(value),
        ...named,
      };
    }

    return value.toLocaleString(locales, options);
  }
}
