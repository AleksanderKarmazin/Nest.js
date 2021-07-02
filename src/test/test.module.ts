import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TestController } from './test.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    // import of config module
    ConfigModule
    // import of config module 
  ],
  controllers: [TestController],
  providers: [TestService]
})
export class TestModule {}
