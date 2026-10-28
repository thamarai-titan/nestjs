import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HealthcheckService } from './healthcheck.service.js';
import { CreateHealthcheckDto } from './dto/create-healthcheck.dto.js';
import { UpdateHealthcheckDto } from './dto/update-healthcheck.dto.js';

@Controller('healthcheck')
export class HealthcheckController {
  constructor(private readonly healthcheckService: HealthcheckService) {}

  @Post()
  create(@Body() createHealthcheckDto: CreateHealthcheckDto) {
    return this.healthcheckService.create(createHealthcheckDto);
  }

  @Get()
  findAll() {
    return this.healthcheckService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.healthcheckService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHealthcheckDto: UpdateHealthcheckDto) {
    return this.healthcheckService.update(+id, updateHealthcheckDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.healthcheckService.remove(+id);
  }
}
