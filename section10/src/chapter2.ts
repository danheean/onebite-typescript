/**
 * Pick<T, K>
 * -> 뽑다, 고르다
 * -> 특정 타입으로부터 특정 프로퍼티만 딱 골라내는 그런 타입
 */

interface Post {
    title: string;
    tags: string[];
    content: string;
    thumbnailURL?: string;
}

type Pick<T, K extends keyof T> = {
    // K extends 'title' | 'tags' | 'content' | 'thumbnailURL'
    // number extends 'title' | 'tags' | 'content' | 'thumbnailURL'
    [key in K]: T[key];
}

// 레거시 시스템을 위해 사용될 수 있다.
const lagacyPost: Pick<Post, "title" | "content"> = {
    title: "제목",
    content: "내용",
};

/**
 * Omit<T, K>
 * -> 생략하다, 빼다
 * -> 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
 */
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T = Post, K = 'title'
// Pick,<Post, Exclude<keyof Post, 'title'>>
// Pick<Post, Exclude<'title' | 'tags' | 'content' | 'thumbnailURL', 'title'>>
// Pick<Post, 'tags' | 'content' | 'thumbnailURL'>

const noTitlePost: Omit<Post, "title"> = {
    content: "",
    tags: [],
    thumbnailURL: "", 
};

/**
 * Record<K, V>
 * -> 특정 타입으로 구성된 객체 타입을 만들어주는 타입
 */


type ThumbnailLegacy = {
    large: { url: string };
    medium: { url: string };
    small: { url: string };
    watch: { url: string };
};

type Record<K extends keyof any, V> = {
    [key in K]: V;
}

type Thumbnail = Record<"large" | "medium" | "small" | "watch", { url: string, size: number }>;