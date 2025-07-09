/**
 * keyof 연산자
 */

interface Person {
  name: string;
  age: number;
}

type Person2 = typeof person;

function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

function getPropertyKey2(person: Person2, key: keyof typeof person) {
  return person[key];
}

const person: Person = {
  name: "이정환",
  age: 27,
};

console.log(getPropertyKey(person, "name")); // 이정환
console.log(person.name); // 이정환

getPropertyKey(person, "name");
