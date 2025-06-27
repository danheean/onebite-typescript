// object
let user = {
    id: 1,
    name: "이정환",
};
// 객체 리터럴 타입 사용
let user1 = {
    id: 1,
    name: "이정환",
};
console.log(user1.id);
// 구조적 타입 시스템
// Property-based type system
// 이름을 기준으로 작성된 타잆시스템 -> 명목적 타입시스템
let dog = {
    name: "꼬꼬마",
    color: "brown",
};
console.log(dog.name);
let config = {
    apiKey: "MY API KEY",
};
export {};
// 에러 발생
// config.apiKey = "MY API KEY 2";
