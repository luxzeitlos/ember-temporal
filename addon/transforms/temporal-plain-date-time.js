import Transform from '@ember-data/serializer/transform';
import { Temporal } from '@js-temporal/polyfill';

export default class TemporalPlainDateTimeTransform extends Transform {
  deserialize(serialized) {
    return Temporal.PlainDateTime.from(serialized);
  }

  serialize(deserialized) {
    return deserialized?.toJSON();
  }
}
