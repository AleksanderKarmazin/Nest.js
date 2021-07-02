import { prop } from "@typegoose/typegoose";
import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";

export enum TopLavelCategory {
    Courses,
    Services,
    Books,
    Products
}


class HHData {

    @prop()
    count:number;

    @prop()
    juniorSelary:number;


    @prop()
    middelSelary:number;

    @prop() 
    seniorSelary:number;
}

class TopPageAdvantages {
    
    @prop() 
    title:string;

    @prop() 
    price:number;

    @prop() 
    oldPrice:number;

    @prop() 
    credit:number;

    @prop() 
    calculatedRating:number;

    @prop() 
    description:string;

}

export interface TopPageModel extends Base { }
export class TopPageModel extends TimeStamps{
    // _id:string; => export interface TopPageModel extends Base { }
    
    @prop({ enum:TopLavelCategory })
    firstCategory: TopLavelCategory;

    @prop()
    secondCategory:string;

    @prop({unique:true})
    alias:string; 


    @prop()
    title:string; 

    @prop()
    category:string;

    @prop({ type: () => HHData})
    hh?:HHData

    // hh?:{
    //     count:number;
    //     juniorSelary:number;
    //     middelSelary:number;
    //     seniorSelary:number;
    // };

    // @prop()
    // advantages:{
    //     title:string;
    //     price:number;
    //     oldPrice:number;
    //     credit:number;
    //     calculatedRating:number;
    //     description:string;
    // }[];

    @prop({ type: () => [TopPageAdvantages]})
    advantages:TopPageAdvantages[];

    @prop()
    seoText:string;

    @prop()
    tegsTitle:string;

    @prop({ type: () => [String]})
    tegs:string[];
}
