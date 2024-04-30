import { Module } from '@nestjs/common';
import { BuyersModule } from 'src/buyer/buyers.module';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { PrismaModule } from 'src/prisma/prisma.module';
import { BuyersService } from 'src/buyer/buyers.service';
import { SessionSerializer } from './session.serializer';

@Module({
    imports:[BuyersModule,PassportModule.register({session:true})],
    providers:[AuthService,LocalStrategy,SessionSerializer],
    
})
export class AuthModule {}
