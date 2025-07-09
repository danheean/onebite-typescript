/**
 * infer
 * infer R 은 참으로 만드는 R 타입을 추론한다.
 */

type FuncA = () => string;
type FuncB = () => number;

type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA>;
type B = ReturnType<FuncB>;

// 추론 불가능함 따라서 never 타입이 된다.
type C = ReturnType<number>;

/**
 * 예제
 */

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 1. T는 프로미스 타입이어야한다.
// 2. 프로미스 타입의 결과값 타입을 반환해야 한다.

type PromiseA = PromiseUnpack<Promise<number>>; // number
type PromiseB = PromiseUnpack<Promise<string>>; // string

