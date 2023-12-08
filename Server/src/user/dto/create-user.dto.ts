import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto{
    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        example:"Mustafa Durmaz"
    })
    name:string;

    @IsEmail()
    @ApiProperty({
        example:"test@gmail.com"
    })
    email:string;
}