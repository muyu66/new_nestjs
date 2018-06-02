import { Module } from '@nestjs/common';
// import { TypeormModule } from './typeorm.module';
import { MongodbModule } from './mongodb.module';
import { TestDao } from '../dao';

@Module({
    imports: [MongodbModule],
    providers: [TestDao],
    exports: [TestDao],
})
export class DaoModule { }
