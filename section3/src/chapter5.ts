/**
 * 타입 추런
 */

//let a: number = 10;

// 타입을 추론할 수 없을 경우 오류 발생
// function func(param){

// }

let a = 10; // 타입 넓히기
let b = "hello";
let c = {
  id: 1,
  name: "이정환",
  profile: {
    nickname: "winterlood",
  },
  urls: ["https://winterlood.com"],
};

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
    return "hello";
}

let d; // 암묵적 any 타입
d = 10; // any -> number 타입 진화
d.toFixed();
// d.toUpperCase();

d = "hello"; // any -> string 타입 진화
d.toUpperCase();
// d.toFixed();

const num = 10;
const str = "hello";

let arr = [1, "string"];