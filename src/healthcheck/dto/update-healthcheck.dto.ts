import { PartialType } from '@nestjs/mapped-types';
import { CreateHealthcheckDto } from './create-healthcheck.dto.js';

export class UpdateHealthcheckDto extends PartialType(CreateHealthcheckDto) {}
