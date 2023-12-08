import { Test, TestingModule } from '@nestjs/testing';
import { YksLisansController } from './yks-lisans.controller';

describe('YksLisansController', () => {
  let controller: YksLisansController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [YksLisansController],
    }).compile();

    controller = module.get<YksLisansController>(YksLisansController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
