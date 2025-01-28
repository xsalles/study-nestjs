import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { Dto } from "./dto/index";

@Controller("/accounts")
export class CreateAccountController {
  constructor(private readonly prisma: PrismaService) {}

  @Post()
  @HttpCode(201)
  async handle(@Body() dto: Dto) {
    const name = dto.name;
    const email = dto.email;
    const password = dto.password;
    try {
      await this.prisma.user.create({
        data: {
          name,
          email,
          password,
        },
      });
    } catch (error) {
      if (error.code === "P2002") {
        return "This user already was created";
      } else {
        return error;
      }
    }
  }
}
