import {
  Controller,
  Get,
  HttpStatus,
  ParseIntPipe,
  Query,
} from "@nestjs/common";
import { YksLisansService } from "./yks-lisans.service";

@Controller("yks-lisans")
export class YksLisansController {
  constructor(private yksLisansService: YksLisansService) {}

  // @Get()
  // async showAllUniversities(){
  //     return {
  //         statusCode:HttpStatus.OK,
  //         data: await this.yksLisansService.showAllUniversities(),
  //     }
  // }

  @Get("universities")
  async filterUsers(
    @Query("name") name: string,
    @Query("email") email: string,
    @Query("page", ParseIntPipe) page = 1,
    @Query("limit", ParseIntPipe) limit = 10
  ) {
    const filters = { name, email };
    const result = await this.yksLisansService.filterUsers(
      filters,
      page,
      limit
    );
    return result;
  }
}
