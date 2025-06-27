/**
 * Unknown 타입 :: 전체 집합
 */

function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;

  // let num: number = unknownVar;
  // let str: string = unknownVar;
  // let bool: boolean = unknownVar;
}

/**
 * Never 타입 :: 공집합
 */

function neverExam() {
  function neverFunc(): never {
    throw new Error("error");
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  //   let never1: never = 10;
  //   let never2: never = "hello";
  //   let never3: never = true;
}

/**
 * Void 타입 :: 함수의 반환값이 없을 때
 */

function voidExam() {
  function voidFunc(): void {
    console.log("hi");
  }

  let voidVar: void = undefined;
}

/**
 * any 타입 :: 모든 타입을 허용
 */

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownExam;

  undefinedVar = anyVar;

  // neverVar = anyVar;
}
