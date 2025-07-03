/**
 * 인터페이스 확장(상속)
 */

interface Animal {
  name: string;
  color: string;
}

interface Dog extends Animal {
  // name: "dog";
  isBark: boolean;
}

const dog: Dog = {
  name: "dog",
  color: "brown",
  isBark: true,
};

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

interface DogCat extends Dog, Cat {}
const dogCat: DogCat = {
  name: "dogCat",
  color: "black",
  isBark: true,
  isScratch: true,
};