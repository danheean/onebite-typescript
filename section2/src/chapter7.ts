// void
// void -> 공허 -> 아무것도 없다.
// void -> 아무것도 없음을 의미하는 타입
// 함수에서 정말 아무것도 반환하지 않을 때 사용

function func(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
}

let a: void;
// a = 1;        // 컴파일 에러
// a = "hello";  // 컴파일 에러
// a = {};       // 컴파일 에러
a = undefined;
a = null; // compilerOptions.strictNullChecks=false 일 때 가능

// never
// never -> 존재하지 않는
// 불가능한 타입
// 함수에 반환값이 있는 것 자체가 불가능한 경우
// 어떤 값도 할당할 수 없다.

function func3(): never {
  while (true) {}
}

// 반환하는 것 자체가 불가능한 경우
function func4(): never {
  throw new Error("error");
}

let anyVar: any;
let b: never;

// b = 1;         // 컴파일 에러
// b = {};         // 컴파일 에러
// b = "";         // 컴파일 에러
// b = undefined;  // 컴파일 에러
// b = null;       // 컴파일 에러
// b = anyVar;     // 컴파일 에러
