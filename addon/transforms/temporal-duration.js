import Transform from '@ember-data/serializer/transform';
import { Temporal } from '@js-temporal/polyfill';

export default class TemporalDurationTransform extends Transform {
  deserialize(serialized) {
    return serialized && Temporal.Duration.from(serialized);
  }

  serialize(deserialized) {
    return deserialized?.toJSON();
  }
}
