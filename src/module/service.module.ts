import { Module } from '@nestjs/common';
import { TestService } from '../service/index';
import { DaoModule } from './dao.module';

@Module({
    imports: [DaoModule],
    providers: [TestService],
    exports: [TestService],
})

export class ServiceModule { }
