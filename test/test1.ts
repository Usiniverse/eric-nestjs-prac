// 1번째 예시
// function deco(
//   target: any,
//   propertyKey: string,
//   descriptor: PropertyDescriptor,
// ) {
//   console.log('데커레이터가 평가됨');
// }

// 2번째 예시
function deco(
    value: string,
) {
    console.log('데커레이터가 평가됨');
    return function (target: any,
                     propertyKey: string,
                     descriptor: PropertyDescriptor) {
        console.log(value)
    }
}

class TestClass {
  @deco('Hello')
  test() {
      console.log('test')
  }성
}

const t = new TestClass();
t.test()