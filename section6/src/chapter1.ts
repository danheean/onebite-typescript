/**
 * 타입스크립트의 클래스
 */

const employee = {
  name: "철수",
  age: 20,
  position: "개발자",
  work() {
    console.log(`${this.position} 업무를 합니다.`);
  },
};

class Employee {
  // 필드
  name: string;
  age: number;
  position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log(`${this.position} 업무를 합니다.`);
  }
}

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  // 생성자
  constructor(name: string, age: number, position: string, officeNumber: number) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}

const employeeB = new Employee("철수", 20, "개발자");
console.log(employeeB);

const employeeC: Employee = {
  name: "영희",
  age: 21,
  position: "디자이너",
  work() {
    console.log(`${this.position} 디자인을 합니다.`);
  },
};

console.log(employeeC);
