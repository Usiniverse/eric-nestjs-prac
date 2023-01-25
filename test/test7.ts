// 매개변수 데커레이터

import { BadRequestException } from '@nestjs/common';

function MinLength(min: number) {
  return function (target: any, key: string, parameterIndex: number) {
    target.validators = {
      minLength: function (args: string[]) {
        return args[parameterIndex].length >= min;
      },
    };
  };
}

function Validate(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor,
) {
  const method = descriptor.value;

  descriptor.value = function (...args) {
    Object.keys(target.validators).forEach((key) => {
      if (!target.validators[key](args)) {
        throw new BadRequestException();
      }
      return method.apply(this, args);
    });
    method.apply(this, args);
  };
}

class User {
  private name: string;

  @Validate
  setName(@MinLength(3) name: string) {
    this.name = name;
  }
}

const P = new User();
P.setName('Marker');
console.log('----------');
P.setName('Ma');
