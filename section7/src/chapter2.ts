/**
 * map 메서드
 */

const arr = [1, 2, 3];
const newArr = arr.map((item) => item * 2);
// [2, 4, 6]
console.log(newArr);

function map<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

let newArr2 = map(arr, (item) => item * 2);
console.log(newArr2);

let newArr3 = map(["hi", "hello"], (item) => parseInt(item));
console.log(newArr3);

/**
 * forEach
 */
const arr2 = [1, 2, 3];
arr2.forEach((item) => console.log(item));

function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

forEach(arr2, (item) => console.log(item.toFixed()));

forEach(['123', '456'], (it)=>{
    it;
})