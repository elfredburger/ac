import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor (private authService:AuthService){super({usernameField:'email'});
        
    }


async validate(email:string,password:string):Promise<any>{
    const buyer = await this.authService.validateUser(email,password);
    
    if (!buyer){
        throw new UnauthorizedException();

        
    }
    return buyer;
}}