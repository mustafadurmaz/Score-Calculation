import { Module } from '@nestjs/common';
import { YksLisansController } from './yks-lisans.controller';
import { YksLisansService } from './yks-lisans.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { YksLisansEntity } from './entity/yks-lisans.entity';

@Module({
  imports: [TypeOrmModule.forFeature([YksLisansEntity])],
  controllers: [YksLisansController],
  providers: [YksLisansService]
})
export class YksLisansModule {}
