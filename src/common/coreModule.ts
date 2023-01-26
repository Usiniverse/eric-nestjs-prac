import { Module } from '@nestjs/common';
import { CommonModule } from './commonModule';

@Module({
  imports: [CommonModule],
  exports: [CommonModule],
})
export class CoreModule {}
