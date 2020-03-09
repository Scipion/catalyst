import {findTarget, findTargets} from '@github/catalyst'

export function target(proto: object, key: string) {
  Object.defineProperty(
    proto,
    key,
    {
      configurable: true,
      get: function() { return findTarget(this, key) }
    }
  );
}

export function targets(proto: object, key: string) {
  Object.defineProperty(
    proto,
    key,
    {
      configurable: true,
      get: function() { return findTargets(this, key) }
    }
  );
}
