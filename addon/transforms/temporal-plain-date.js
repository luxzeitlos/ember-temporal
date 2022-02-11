import Transform from '@ember-data/serializer/transform';
import { Temporal } from '@js-temporal/polyfill';

export default class TemporalPlainDateTransform extends Transform {
  deserialize(serialized) {
    return Temporal.PlainDate.from(serialized);
  }

  serialize(deserialized) {
    return deserialized?.toJSON();
  }
}
