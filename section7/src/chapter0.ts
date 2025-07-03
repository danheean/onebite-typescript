/**
 * 제네릭
 */

// 제네릭 함수
// <T> : 제네릭 타입 변수 (Type)
function func<T>(value: T): T {
    return value;
}

let num = func(10);
num.toFixed();

let bool = func(true);

let str = func("string");

let arr = func<[number, number, number]>([1, 2, 3]);
