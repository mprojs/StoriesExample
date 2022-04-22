export function UniqArrayOfObjects<T>(list: T[], prop: string): T[] {
  return list.filter((value, index, array) => {
    return array.findIndex(item => item[prop] === value[prop]) === index;
  });
}

export function UniqArray<T>(list: T[]): T[] {
  return list.filter((value, index, array) => {
    return array.indexOf(value) === index;
  });
}
