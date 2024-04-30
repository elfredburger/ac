import { Module } from '@nestjs/common';

import { BuyersModule } from './buyer/buyers.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BuyerController } from './buyer/buyers.controller';
import { BuyersService } from './buyer/buyers.service';
@Module({
  imports: [ AuthModule,BuyersModule],
  controllers: [  AppController],
  providers: [ AppService],
})

export class AppModule {}
