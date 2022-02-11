import Transform from '@ember-data/serializer/transform';
import { Temporal } from '@js-temporal/polyfill';

export default class TemporalPlainTimeTransform extends Transform {
  deserialize(serialized) {
    return Temporal.PlainTime.from(serialized);
  }

  serialize(deserialized) {
    return deserialized?.toJSON();
  }
}
