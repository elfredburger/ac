import { Module } from '@nestjs/common';
import { BuyersService } from './buyers.service';
import { BuyerController } from './buyers.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ BuyerController],
  providers: [BuyersService],
  imports:[PrismaModule],
  exports:[BuyersService]
  
})
export class BuyersModule {}
