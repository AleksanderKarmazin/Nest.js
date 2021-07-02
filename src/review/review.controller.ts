import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { REVIEW_NOT_FOUND } from './review.constans';
import { ReviewService } from './review.service';
// import { ReviewModel } from './review.model';

@Controller('review')
export class ReviewController {
    constructor(private readonly reviewService: ReviewService){ }


    @Post('create')
    async create(@Body() dto: CreateReviewDto){
        this.reviewService.create(dto)
    }

    // @Post('create')
    // async create(@Body() dto: Omit<ReviewModel, '_id'>){

    // }

    @Delete(':id')
    async delete(@Param('id') id:string){
        const deletedDod = await this.reviewService.delete(id);
        if (!deletedDod) {
            throw new HttpException(REVIEW_NOT_FOUND, HttpStatus.NOT_FOUND)
        } else {
            
        }
    }

    // @Delete(':id')
    // async delete(@Param('id') id:string){
    //     const deletedDod = await this.reviewService.delete(id);
    //     if (!deletedDod) {
    //         throw new HttpException('Отзыв с таким id не найден', HttpStatus.NOT_FOUND)
    //     } else {
            
    //     }
    // }

    @Get('getProduct/:productId')
    async getByProduct(@Param('productId') productId:string){

    }

}
