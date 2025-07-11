/**
 * 함수 타입 정의
 */

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기
function func(a: number, b: number): number {
  return a + b;
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */
const add = (a: number, b: number): number => a + b;

/**
 * 함수의 매개변수
 * 선택적 매개변수는 기본값을 할당해주는 것이 좋다.
 * 선택적 매개변수는 필수 매개 변수뒤에 배치해야 한다.
 */
function introduce(name = "이정환", age: number, tall?: number) {
  console.log(`안녕하세요! 저는 ${name} 입니다.`);
  if (typeof tall === "number") {
    console.log(`키는 ${tall + 10}cm 입니다.`);
  }
}

introduce("이정환", 27, 175);
introduce("이정환", 27);

function getSum(...rest: number[]): number {
  let sum = 0;
  rest.forEach((it) => (sum += it));

  return sum;
}

getSum(1, 2, 3); // 6
getSum(1, 2, 3, 4, 5); // 15
