import { IsEmail, IsString } from "class-validator";

export class Dto {
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    password: string;
}