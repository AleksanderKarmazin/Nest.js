import { prop } from "@typegoose/typegoose";
import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";



class ProductCharacteristic {
	@prop()
	name: string;

	@prop()
	value:string;
}

export interface ProductModel extends Base { }
export class ProductModel extends TimeStamps{
	// _id:string; replaced by  export interface ProductModel extends Base { }
	@prop()
	image:string;

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

	@prop()
	advantages:string;

	@prop()
	disadvantages:string;

	@prop({ type: () => [String]})
	categories:string[];

	@prop({ type: () => [String]})
	tags:string[];
	
	@prop({ type: () => [ProductCharacteristic]})
	characteristics:ProductCharacteristic[];

	
// 	@prop()
// 	characteristics:{
// 		[key:string]: string;
// 	};

}
