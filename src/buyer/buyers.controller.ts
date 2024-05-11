import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Patch,
  Req,
  Res,
  Body,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { buyerDto } from 'src/buyer/dto/buyer.dto';
import { BuyersService } from 'src/buyer/buyers.service';
import { SubscriptionDto } from '../subscription/dto/subscriprion.dto';

@Controller('buyers')
export class BuyerController {
  constructor(private buyersService: BuyersService) {}

  @Post('create')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  create(@Body() buyerPayload: buyerDto) {
    return this.buyersService.createBuyer(buyerPayload);
  }

  @Get('get')
  getone(@Body() buyerPayload: buyerDto) {
    return this.buyersService.findOne(buyerPayload.email);
  }
}
