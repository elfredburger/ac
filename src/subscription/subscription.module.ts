
import { SubscriptionService } from "./subscription.service";
import { Module } from '@nestjs/common';

import { PrismaModule } from "src/prisma/prisma.module";
import { PrismaService } from "src/prisma/prisma.service";
import { SubscriptionController } from "./subscription.controller";
@Module({
    controllers:[SubscriptionController],
    providers:[SubscriptionService],
    imports:[PrismaModule],
    
})
export class SubscriptionModule{}


