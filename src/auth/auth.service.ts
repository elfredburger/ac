import { Injectable } from '@nestjs/common';
import { BuyersService } from 'src/buyer/buyers.service';
import * as argon from 'argon2'
@Injectable()
export class AuthService {
    constructor(private buyersService:BuyersService){}
    async validateUser(email:string,password:string):Promise<any>{
        
        const buyer = await this.buyersService.findOne(email)
        
        if(buyer &&  argon.verify(buyer.password,password)){
            return buyer
        }
        return null;
    }
}
