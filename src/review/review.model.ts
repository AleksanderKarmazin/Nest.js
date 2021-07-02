import { prop,  } from "@typegoose/typegoose";
import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { Types } from "mongoose";


export interface ReviewModel extends Base { }
export class ReviewModel extends TimeStamps{
    // _id:string; => export interface ProductModel extends Base { }
    
    @prop()
    name:string;

    @prop()
	title:string;

    @prop()
    description:string;

    @prop()
    rating:number;

    // productId: Types.ObjectId

    // @prop()
    // createdAt: Date;   =.> extends TimeStamps  

  
}
