import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Subscription } from 'rxjs';

export type BuyerDocument = HydratedDocument<Buyer>;

@Schema()
export class Buyer {
  @Prop({required:true})
  name: string;

  @Prop({required:true})
  email: string;

  @Prop({required:true})
  subscription: any;
  
 
}

export const BuyerSchema = SchemaFactory.createForClass(Buyer);