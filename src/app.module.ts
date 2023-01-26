import { Global, Module } from '@nestjs/common';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { EmailService } from './email/email.service';
import { AppController } from './app.comtroller';
import { CoreModule } from './common/coreModule';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { EmailModule } from './email/email.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import emailConfig from './config/emailConfig';
import { validationSchema } from './config/validationSchema';

console.log(__dirname);
console.log(`${__dirname}/config/env/.${process.env.NODE_ENV}.env`);

@Module({
  imports: [
    UsersModule,
    EmailModule,
    ConfigModule.forRoot({
      envFilePath: [`${__dirname}/config/env/.${process.env.NODE_ENV}.env`],
      load: [emailConfig],
      isGlobal: true,
      validationSchema,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
