import { Controller, Get } from '@nestjs/common';
import { CommonService } from './common/commonService';

@Controller()
export class AppController {
  // constructor(private readonly commonService: CommonService) {}

  @Get('/')
  getHello(): string {
    console.log('Hello World!');
    console.log(process.env.DATABASE_HOST);
    return process.env.DATABASE_HOST;
  }

  // @Get('/common-hello')
  // getCommonHello(): string {
  //   return this.commonService.hello();
  // }
}
