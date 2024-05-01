import { PrismaService } from "src/prisma/prisma.service";
import { SubscriptionDto } from "./dto/subscriprion.dto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class SubscriptionService{
    constructor(private prisma:PrismaService){}

    async createSubscription(subscriprion:SubscriptionDto){
        const subscription = await this.prisma.subscription.create({
            data:{
                subscriptionName:subscriprion.subscriptionName
            }



        })
    }

}