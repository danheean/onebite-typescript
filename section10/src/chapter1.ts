/**
 * Partial<T>
 * -> 부분적인, 일부분의
 * -> 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티 바꿔주는 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

type Partila<T> = {
  [key in keyof T]?: T[key];
};

// 작성된 내용을 자동으로 임시 저장하는 객체
const draft: Partial<Post> = {
  title: "제목",
  content: "초안...",
};

/**
 * Required<T>
 * -> 필수의, 필수적인
 * -> 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
 * -> 선택적 프로퍼티를 모두 필수 프로퍼티로 바꾼다.
 */
type Required<T> = {
  [key in keyof T]-?: T[key];
};

const withThumbnailPost: Required<Post> = {
  title: "제목",
  tags: ["typescript", "javascript"],
  content: "초안...",
  thumbnailURL: "https://...",
};

/**
 * Readonly<T>
 * -> 읽기 전용, 수정불가
 * -> 특정 객체 타입의 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어주는 타입
 */

type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};

const readOnlyPost: Readonly<Post> = {
  title: "제목",
  tags: ["typescript", "javascript"],
  content: "초안...",
};

// readOnlyPost.content = "변경";

/**
 * Record<K, T>
 * -> 특정 타입으로 구성된 객체 타입을 만들어주는 타입
 */
