/**
 * 맵드 타입
 * interface에서는 사용할 수 없다.
 * 실무에서 많이 사용됨
 */

interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
    [key in keyof User]?: User[key];
}

type BooleanUser = {
    [key in keyof User]: boolean;
}

type ReadonlyUser = {
    readonly [key in keyof User]: User[key];
}

type NullableUser = {
    [key in keyof User]: User[key] | null;
}

// 한명의 유저 정보를 불러오는 기능
function fetchUser(): User {
  // ... 기능
  return {
    id: 1,
    name: "이정환",
    age: 27,
  };
}

// * 한명의 유저 정보를 수정하는 기능
function updateUser(user: Partial<User>) {
  // ... 기능
}

updateUser({
  id: 1,
  name: "이정환",
  age: 25,
});

updateUser({
  name: "이정환",
  age: 25,
});
