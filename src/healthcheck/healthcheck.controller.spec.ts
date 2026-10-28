import { Test, TestingModule } from '@nestjs/testing';
import { HealthcheckController } from './healthcheck.controller.js';
import { HealthcheckService } from './healthcheck.service.js';

describe('HealthcheckController', () => {
  let controller: HealthcheckController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthcheckController],
      providers: [HealthcheckService],
    }).compile();

    controller = module.get<HealthcheckController>(HealthcheckController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
