/**
 * Exclude<T, U>
 * -> 제외하다, 추방하다
 * -> T에서 U를 제거하는 타입
 */

type Exclude<T, U> = T extends U ? never : T;
// 1 단계
// Exclude<string, boolean> |
// Exclude<boolean, boolean>

// 2 단계
// string |
// never

// 결과
// string

type A = Exclude<string | boolean, boolean>;

/**
 * Extract<T, U>
 * -> 추출하다, 뽑아내다
 * -> T에서 U를 추출하는 타입
 */

type Extract<T, U> = T extends U ? T : never;

type B = Exclude<string | boolean, boolean>;

/**
 * ReturnType<T>
 * -> 반환값의 타입을 추출하는 타입
 */

type ReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : never;

function funcA() {
  return "hello";
}

function funcB() {
  return 10;
}

type ReturnA = ReturnType<typeof funcA>;
type ReturnB = ReturnType<typeof funcB>;
