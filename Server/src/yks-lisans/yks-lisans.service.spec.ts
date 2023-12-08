import { Test, TestingModule } from '@nestjs/testing';
import { YksLisansService } from './yks-lisans.service';

describe('YksLisansService', () => {
  let service: YksLisansService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [YksLisansService],
    }).compile();

    service = module.get<YksLisansService>(YksLisansService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
