import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { HealthcheckModule } from './healthcheck/healthcheck.module.js';
import { ExampleModule } from './example/example.module.js';

@Module({
  imports: [HealthcheckModule, ExampleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
