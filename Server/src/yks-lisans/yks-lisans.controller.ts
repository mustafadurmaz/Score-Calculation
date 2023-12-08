import { Controller, Get, HttpStatus } from '@nestjs/common';
import { YksLisansService } from './yks-lisans.service';

@Controller('yks-lisans')
export class YksLisansController {
    constructor(private yksLisansService: YksLisansService) {}
    @Get()
    async showAllUniversities(){
        return {
            statusCode:HttpStatus.OK,
            data: await this.yksLisansService.showAllUniversities(),
        }
    }
}
