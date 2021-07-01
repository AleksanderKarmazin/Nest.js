export enum TopLavelCategory {
    Courses,
    Services,
    Books,
    Products
}

export class TopPageModel {
    firstCategory: TopLavelCategory;
    secondCategory:string;
    title:string; 
    category:string;
    hh?:{
        count:number;
        juniorSelary:number;
        middelSelary:number;
        seniorSelary:number;
    };
    advantages:{
        title:string;
        price:number;
        oldPrice:number;
        credit:number;
        calculatedRating:number;
        description:string;
    }[];
    seoText:string;
    tegsTitle:string;
    tegs:string[];
}
