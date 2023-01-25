// 접근자 데커레이터

// 설명자(PropertyDescriptor)의 enumerable 속성을 인자로 받음
function Enumerable(enumerable: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    descriptor.enumerable = enumerable;
  };
}

class Person {
  constructor(private name: string) {}

  @Enumerable(true)
  get getName() {
    return this.name;
  }

  @Enumerable(false) // 열거형 false 처리 : 불러오지 못함
  set setName(name: string) {
    this.name = name;
  }
}

const person = new Person('Mark');
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
