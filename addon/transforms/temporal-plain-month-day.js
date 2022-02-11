import Transform from '@ember-data/serializer/transform';
import { Temporal } from '@js-temporal/polyfill';

export default class TemporalPlainMonthDayTransform extends Transform {
  deserialize(serialized) {
    return Temporal.PlainMonthDay.from(serialized);
  }

  serialize(deserialized) {
    return deserialized?.toJSON();
  }
}
