// any
// 특정 변수의 타입을 우리가 확실히 모를 때 사용
// 어떤 타입이든지 변수에 넣을 수 있다.
// 런타임에 오류가 발생한다.
// 치트키와 같고 타입 검사를 하지 않는 것과 같다.
// 가능하면 최대한 사용하지 않는 것이 좋다.

let anyVar: any = 10;
anyVar = "hello";

anyVar = true;
anyVar = {};
anyVar = () => {};

anyVar.toUpperCase();
anyVar.toFixed();

let num: number = 10;
num = anyVar;

// unknown
// 모든 타입에 unknown 타입의 변수를 넣을 수 없다. 
// 메소드와 연산을 할 수 없다. 
// 타입 정제, 타입 좁히기로 제한적으로 변수에 넣을 수 있다.
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};


