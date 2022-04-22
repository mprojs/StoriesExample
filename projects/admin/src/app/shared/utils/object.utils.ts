import { klona } from 'klona/lite';

export function DeepCloneObject<T>(obj: T): T {
  return klona(obj);
}

export function IsObjectsEqual(o1: Object, o2: Object, debug = false): boolean {
  if (!o1 || !o2) {
    if (debug) {
      console.log('IsObjectsEqual', 'no object', o1, o2);
    }
    return false;
  }
  const entries1 = Object.entries(o1);
  const entries2 = Object.entries(o2);
  if (entries1.length !== entries2.length) {
    if (debug) {
      console.log('IsObjectsEqual', 'length', entries1.length, entries2.length, o1, o2);
    }
    return false;
  }

  function isEqual(v1, v2) {
    if (debug && v1 != v2) {
      console.log('IsObjectsEqual', 'not equal', v1, v2, o1, o2);
    }
    return v1 == v2;
  }

  return entries1.every(([ key, val1 ]) => {
    const val2 = o2[key];
    const type = typeof val1;
    if (val1 == null && val2 == null) {
      return true;
    }
    if ([ 'boolean', 'number', 'string' ].includes(type)) {
      return isEqual(val1, val2);
    }
    if (val1 instanceof Date) {
      return isEqual(val1.valueOf(), val2.valueOf());
    } else if (type === 'object') {
      return IsObjectsEqual(val1, val2, debug);
    }
    // eslint-disable-next-line no-console
    console.error(`IsObjectsEqual found unsuported propery type ${val1} in object`, o1);
    if (debug) {
      console.log('IsObjectsEqual', 'end', o1, o2);
    }
    return false;
  });
}
