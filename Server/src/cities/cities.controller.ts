import { Controller, Get, HttpStatus } from '@nestjs/common';
import { CitiesService } from './cities.service';

@Controller('cities')
export class CitiesController {
  constructor(private citiesService: CitiesService) {}
  @Get()
  async showAllCities() {
    return {
      statusCode: HttpStatus.OK,
      data: await this.citiesService.showAllCities(),
    };
  }
}
