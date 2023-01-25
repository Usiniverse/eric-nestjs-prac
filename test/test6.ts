// 속성 데커레이터

function format(formString: string) {
  return function (target: any, propertyKey: string): any {
    let value = target[propertyKey];

    function getter() {
      return `${formString} ${value}`;
    }

    function setter(newValue: string) {
      value = newValue;
    }

    return {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    };
  };
}

class Gretter {
  @format('Hello')
  greeting: string;
}

const gretter = new Gretter();
gretter.greeting = 'Mark';
console.log(gretter.greeting);
