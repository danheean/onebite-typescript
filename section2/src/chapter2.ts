// 배열
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["helllo", "im", "jurepi"];

let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (string | number)[] = [1, "hello"];

// 다차원 배열의 타입 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

let doubleArr2: Array<Array<number>> = [
  [1, 2, 3],
  [4, 5],
];

// 튜를
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "2", true];

// 튜플을 사용시 주의해야 한다.
tup1.push(3);
tup1.pop();
tup1.pop();
tup1.pop();

const users = [
  ["이정환", 1],
  ["이아무개", 2],
  ["김아무개", 3],
  ["박아무개", 4],
  ["최아무개", 5],
];

