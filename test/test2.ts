/* 데커레이터의 종류 5가지
 * 1. 클래스
 * 2. 메서드
 * 3. 접근자
 * 4. 속성
 * 5. 매개변수
 */
import { factory } from 'ts-jest/dist/transformers/hoist-jest';

function first() {
  console.log('first(): factory evaluated');
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    console.log('first(): called');
  };
}

function second() {
  console.log('second(): factory evaluated');
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    console.log('second(): called');
  };
}

class ExampleClass {
  @first()
  @second()
  method() {
    console.log('method is called');
  }
}

const T = new ExampleClass();
T.method();
