import { Body, Controller, Get, HostParam, Post } from '@nestjs/common';
import { create } from 'node:domain';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Controller({ host: ':version.api.example' })
export class ApiController {
  @Get()
  index(@HostParam('version') version: string): string {
    return `Hello Api! ${version}`;
  }
}
