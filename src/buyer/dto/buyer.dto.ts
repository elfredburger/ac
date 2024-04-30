import { IsEmail, IsNotEmpty } from "class-validator";


export class buyerDto{
   
    @IsEmail()
    @IsNotEmpty()
    email:string;

    @IsNotEmpty()
    password:string;

    @IsNotEmpty()
    subscription: number;
}