import { Injectable } from '@nestjs/common';
import { buyerDto } from 'src/buyer/dto/buyer.dto';
import * as argon from 'argon2'
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class BuyersService {
    constructor(private prisma:PrismaService){}
    
     getBuyers(){
        
    }
    async createBuyer(buyerData:buyerDto ){
        
        const hash = await argon.hash(buyerData.password)
        const buyer= await this.prisma.buyer.create({
           // Something wrong here 
            data:{
                email:buyerData.email,
                password : hash,
                subscription : {
                    connect :{
                         id:buyerData.subscription
                        },
                    },
            },
                include:{subscription:true}
            })
           
        return buyer;
        
 
    }
    async findOne(email){
        const buyer = await this.prisma.buyer.findUnique({where:{email:email}})
      
        return buyer

       
        
        
}}
