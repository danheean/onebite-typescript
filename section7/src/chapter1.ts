/**
 * 첫번째 사례
 */

function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap(1, "hello");

/**
 * 두번째 사례
 */

function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num = returnFirstValue([1, 2, 3]);
let str = returnFirstValue(["hello", "world"]);

let complex = returnFirstValue([1, "hello", true]);

/**
 * 세번째 사례
 */
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]);
let var2 = getLength("hello");
let var3 = getLength({ length: 10 });

let var4 = getLength(10);
