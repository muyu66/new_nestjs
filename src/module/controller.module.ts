import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { TestController } from '../controller/index';
import { ServiceModule } from './service.module';

@Module({
    controllers: [TestController],
    imports: [ServiceModule],
})
export class ControllerModule { }
