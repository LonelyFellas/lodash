export function isFalsey(value: any): boolean {
  return value === null || value === undefined || value === false;
}

export function isNumber(value: any): boolean {
  return typeof value === "number";
}

export function isInfinity(value: any): boolean {
  return value === Infinity || value === -Infinity;
}