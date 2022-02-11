import Transform from '@ember-data/serializer/transform';
import { Temporal } from '@js-temporal/polyfill';

export default class TemporalPlainYearMonthTransform extends Transform {
  deserialize(serialized) {
    return Temporal.PlainYearMonth.from(serialized);
  }

  serialize(deserialized) {
    return deserialized?.toJSON();
  }
}
