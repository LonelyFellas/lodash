import { assertEquals } from "@std/assert/equals";
import { chunk } from "../../src/array/chunk.ts";

const array = [0, 1, 2, 3, 4, 5];

Deno.test("should return chunked arrays", () => {
  assertEquals(chunk(array, 3), [[0, 1, 2], [3, 4, 5]], "chunk should return the correct result");
});

Deno.test("should return the last chunk as remaining elements", () => {
  assertEquals(chunk(array, 4), [[0, 1, 2, 3], [4, 5]], "chunk should return the correct result");
});

Deno.test("should treat falsey `size` values, except `undefined`, as `0`", () => {
  assertEquals(chunk(array, 0), [[0, 1, 2, 3, 4, 5]], "chunk should return the correct result");
  assertEquals(chunk(array, undefined as any), [[0, 1, 2, 3, 4, 5]], "chunk should return the correct result");
  assertEquals(chunk(array, null as any), [[0, 1, 2, 3, 4, 5]], "chunk should return the correct result");
  assertEquals(chunk(array, false as any), [[0, 1, 2, 3, 4, 5]], "chunk should return the correct result");
});

Deno.test("should ensure the minimum `size` is `0`", () => {
  assertEquals(chunk(array, -1), [[0, 1, 2, 3, 4, 5]], "chunk should return the correct result");
});

Deno.test("should coerce `size` to an integer", () => {
  assertEquals(chunk(array, array.length / 4), [[0], [1], [2], [3], [4], [5]], "chunk should return the correct result");
});

Deno.test("should work as an iteratee for methods like `_.map`", () => {
  assertEquals(chunk([[1, 2], [3, 4]], 2), [[[1], [2]], [[3], [4]]], "chunk should return the correct result");
});




// QUnit.test('should coerce `size` to an integer', function(assert) {
//   assert.expect(1);

//   assert.deepEqual(_.chunk(array, array.length / 4), [[0], [1], [2], [3], [4], [5]]);
// });

// QUnit.test('should work as an iteratee for methods like `_.map`', function(assert) {
//   assert.expect(1);

//   var actual = lodashStable.map([[1, 2], [3, 4]], _.chunk);
//   assert.deepEqual(actual, [[[1], [2]], [[3], [4]]]);
// });