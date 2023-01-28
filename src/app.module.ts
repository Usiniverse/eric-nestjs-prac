import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { LoggerMiddleware } from './logger/logger.middleware';
import { UsersModule } from './users/users.module';
import { LoggerMiddleware2 } from './logger/logger.middleware2';
import { UsersController } from './users/users.controller';

@Module({
  imports: [UsersModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware, LoggerMiddleware2)
      .exclude({ path: '/users', method: RequestMethod.GET })
      .forRoutes(UsersController);
  }
}
