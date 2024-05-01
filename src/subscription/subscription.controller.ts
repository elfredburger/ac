import { SubscriptionDto } from "./dto/subscriprion.dto";
import { SubscriptionService } from "./subscription.service";
import { Controller, Get, Post, Put, Delete, Param, Patch, Req, Res, Body, UsePipes, ValidationPipe, ParseIntPipe, HttpException, HttpStatus } from '@nestjs/common';

@Controller('subscription')
export class SubscriptionController{
    constructor(private subscriptionService:SubscriptionService){}
    @Post('create')
    create(@Body()subscriptionPayload:SubscriptionDto){
        return this.subscriptionService.createSubscription(subscriptionPayload)
    }
}