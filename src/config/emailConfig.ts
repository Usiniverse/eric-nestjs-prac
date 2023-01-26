import {
  ConfigFactory,
  ConfigModule,
  ConfigObject,
  registerAs,
} from '@nestjs/config';

export default registerAs('email', () => ({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_AUTH_USER,
    pass: process.env.EMAIL_AUTH_PASSWORD,
  },
  baseUrl: process.env.EMAIL_BASE_URL,
}));

export interface ConfigFactoryKeyHost<T = unknown> {
  KEY: string;
  // asProvider(): {
  imports: [ReturnType<typeof ConfigModule.forFeature>];
  useFactory: (config: T) => T;
  inject: [string];
}
