import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
import { CreateAccountController } from './controllers/create-account.controller'
import { CreateUserDto } from './dto/create-account.dto'

@Module({
  imports: [],
  controllers: [CreateAccountController],
  providers: [PrismaService, CreateUserDto],
})
export class AppModule {}
