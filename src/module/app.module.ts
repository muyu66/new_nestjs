import { Module } from '@nestjs/common';
import { ControllerModule } from './controller.module';

@Module({
    imports: [ControllerModule],
})
export class AppModule { }
