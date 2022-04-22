export function GetRand(length = 5) {
  return Math.round(Math.random() * Math.pow(10, length));
}

export function GetRandOf(max: number) {
  return Math.round(Math.random() * max);
}
