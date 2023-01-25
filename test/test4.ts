// 메서드 데커레이터
function HandleError() {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);

    const method = descriptor.value;

    descriptor.value = function (...args: any[]) {
      try {
        method();
      } catch (e) {
        console.log(e);
      }
    };
  };
}

class Greeter {
  @HandleError()
  hello() {
    throw new Error('Hello Error');
  }
}

const J = new Greeter();
J.hello();

// interface PropertyDescriptor {
//   configurable?: boolean; // 속성의 정의를 수정할 수 있는지 여부
//   enumerable?: boolean; // 열거형인지 여부
//   value?: any; // 속성 값
//   writable?: boolean; // 수정 가능 여부
//   get?(): any;터
//   set?(v: any): void;
// }
