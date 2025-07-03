/**
 * 타입 단언
 * 타입스크립트의 눈을 잠시 가리는 효과
 * 조심해서 사용해야 됨.
 */

type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
person.name = "이정훈";
person.age = 20;

type Doc = {
  name: string;
  color: string;
};

let dog: Doc = {
  name: "돌돌이",
  color: "흰색",
  breed: "진도",
} as Doc;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

let num1 = 10 as never; // A가 슈퍼타입
let num2 = 10 as unknown; // A가 서브타입

// let num3 = 10 as string // A, B와 타입이 겹치지 않는다.
let num3 = 10 as unknown as string; // 다중 단언, 꼼수로 타입 단언, 좋은 방법이 아님
let num4 = 10 as const;

let cat = {
  name: "야용이",
  color: "yellow",
} as const;

// cat.name = "야옹이"; // 읽기 전용 속성이므로 할당할 수 없음

/**
 * Non Null 단언
 */

type Post = {
  title: string;
  author?: string; // 선택적 Porperty
};

let post: Post = {
  title: "게시글1",
  author: "이정훈",
};

const len: number = post.author!.length;
