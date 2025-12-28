import { isNumber, isInfinity } from "../core/is.ts";
/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining elements.
 * @param array - The array to chunk.
 * @param size - The size of each chunk.
 * @returns The chunked array.
 */
export function chunk<T>(array: T[], size: number): T[][] {
  const _array = array.flat();
  const len = _array.length;

  // size 一定是数字类型
  if (!isNumber(size) || isInfinity(size)) {
    return [array];
  }

  let _size = size;
  // 如果size为非正数,则设置为数组长度
  if (size <= 0) {
    _size = array.length;
  }

  // 如果size不是整数切大于0,则设置向下取整
  if (!Number.isInteger(_size) || _size <= 0) {
    _size = Math.floor(_size);
  }

  const res: T[][] = [];

  console.log("array:", array);
  console.log("size:", _size);
  console.log("res:", res);


  for (let i = 0; i < len; i += _size) {
    res.push(_array.slice(i, i + _size) as T[]);
  }
  return res;
}
console.log(chunk([[1, 2], [3, 4]], 2));