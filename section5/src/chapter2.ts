/**
 * 선언 합침
 * 라이브러리의 모듈을 보강할 때 사용됨
 */

interface Person {
  name: string;
}

interface Person {
  age: number;
}

interface Developer extends Person {
  name: "hello";
}

const person: Person = {
  name: "Gabriel",
  age: 27,
};

/**
 * 모듈 보강
 */

interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: string;
}
const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello",
};
