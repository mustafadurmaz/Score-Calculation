import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { YksLisansEntity } from './entity/yks-lisans.entity';
import { Repository } from 'typeorm';

@Injectable()
export class YksLisansService {
    constructor(
        @InjectRepository(YksLisansEntity)
        private yksLisansRepository: Repository<YksLisansEntity>,
    ){}
    async showAllUniversities(){
        return await this.yksLisansRepository.find({
            take: 100, 
        });
    }
}
