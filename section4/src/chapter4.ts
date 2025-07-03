/**
 * 사용자 정의 타입가든
 */

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

function isDog(animal: Animal): animal is Dog {
  return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

function warngin(animal: Animal) {
  if (isDog(animal)) {
    // 강아지
    console.log(animal.name);
  } else if (isCat(animal)) {
    // 고양이
    console.log(animal.name);
  }
}
