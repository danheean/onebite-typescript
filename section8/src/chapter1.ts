/**
 * 인덱스드 엑세스 타입
 */

interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}

function printAuthorInfo(author: Post["author"]) {
  console.log(`${author.name} (${author.id}) ${author.age}`);
}

function printAuthorIdInfo(id: Post["author"]["id"]) {
  console.log(`${id}`);
}

const post: Post = {
  title: "게시물 제목",
  content: "게시물 본문",
  author: {
    id: 1,
    name: "이정환",
    age: 27,
  },
};

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

const post2: PostList[number] = {
  title: "게시물 제목",
  content: "게시물 본문",
  author: {
    id: 1,
    name: "이정환",
    age: 27,
  },
};

function printAuthorInfo2(author: PostList[number]["author"]) {
  console.log(`${author.name} (${author.id}) ${author.age}`);
}

printAuthorInfo2(post2.author);

type Tup = [number, string, boolean];

type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];

type TupNUm = Tup[number];
