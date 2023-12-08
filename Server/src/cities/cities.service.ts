import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CitiesEntity } from './entity/cities.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CitiesService {
    constructor(
        @InjectRepository(CitiesEntity)
        private citiesRepository:Repository<CitiesEntity>,
    ){}

    async showAllCities(){
        return await this.citiesRepository.find();
    }
}
