import { Module } from '@nestjs/common';
import { HealthcheckService } from './healthcheck.service.js';
import { HealthcheckController } from './healthcheck.controller.js';

@Module({
  controllers: [HealthcheckController],
  providers: [HealthcheckService],
})
export class HealthcheckModule {}
