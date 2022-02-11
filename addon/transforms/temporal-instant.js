import Transform from '@ember-data/serializer/transform';
import { Temporal } from '@js-temporal/polyfill';

export default class TemporalInstantTransform extends Transform {
  deserialize(serialized) {
    return Temporal.Instant.from(serialized);
  }

  serialize(deserialized) {
    return deserialized?.toJSON();
  }
}
