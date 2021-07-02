import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { ReviewModule } from './review/review.module';
import { TopPageModule } from './top-page/top-page.module';
import { TestModule } from './test/test.module';
import { TypegooseModule } from 'nestjs-typegoose';
import { getMongoConfig } from './configs/mongo.config';


@Module({
  imports: [
    // import of config module - it does not work for now and was imported in certain module
    ConfigModule.forRoot(),
    // import of config module - it does not work for now and was imported in certain module
    TypegooseModule.forRootAsync({
      imports:[ConfigModule],
      // What we are going to inject in resolve dependencies while initialization 
      inject:[ConfigService],
      useFactory: getMongoConfig
    }),



    AuthModule, 
    ProductModule, 
    ReviewModule, 
    TopPageModule, 
    // TEST
    TestModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
