import { Controller, Get, Post, Put, Delete, Param, Patch, Req, Res, Body, UsePipes, ValidationPipe, ParseIntPipe, HttpException, HttpStatus } from '@nestjs/common';
import { buyerDto } from 'src/buyer/dto/buyer.dto';
import { BuyersService } from 'src/buyer/buyers.service';



@Controller('buyers')
export class BuyerController{
    constructor (private buyersService: BuyersService){}
   
  

    @Post('create')
    @UsePipes(new ValidationPipe({whitelist:true}))
    create(@Body() buyerPayload: buyerDto){
      
        return this.buyersService.createBuyer(buyerPayload)
    }

    

}


