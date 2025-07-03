/**
 * 접근 제어자
 * access modifiler
 * => public private protected
 */

class Employee {
  // 필드
  // private name: string;
  // protected age: number;
  // public position: string;

  // 생성자
  //   constructor(name: string, age: number, position: string) {
  //     this.name = name;
  //     this.age = age;
  //     this.position = position;
  //   }

  constructor(
    private name: string,
    protected age: number,
    public position: string
  ) {}

  // 메서드
  work() {
    console.log(`${this.position} 업무를 합니다.`);
  }
}

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  // 생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }

  // 메서드
  func() {
    this.age; // protected 접근 제어자는 클래스 내부와 상속받은 클래스에서 접근 가능
    // this.name; // private 접근 제어자는 클래스 내부에서만 접근 가능
    this.position;
  }
}

const employee = new Employee("철수", 20, "개발자");
console.log(employee);

employee.work();

// employee.name = "영희"; // private 접근 제어자는 외부에서 접근 불가
// employee.age = 21;     // protected 접근 제어자는 외부에서 접근 불가
employee.position = "디자이너";
console.log(employee);
