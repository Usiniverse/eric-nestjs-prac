import { Module } from '@nestjs/common';
import { CommonService } from './commonService';

@Module({
  providers: [CommonService],
  exports: [CommonService],
})
export class CommonModule {}
