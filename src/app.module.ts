import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
import { CreateAccountController } from './controllers/create-account.controller'
import { Dto } from './controllers/dto'

@Module({
  imports: [],
  controllers: [CreateAccountController],
  providers: [PrismaService, Dto],
})
export class AppModule {}
