import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import * as config from 'config';
import { TestScheme } from '../database/scheme';

const mongodb: { url: string } = config.get('database.mongodb');

const Orm = [
    MongooseModule.forRoot(mongodb.url, {
        useNewUrlParser: true,
    }),
    MongooseModule.forFeature([
        { name: 'test', schema: TestScheme },
    ]),
];

@Module({
    imports: Orm,
    exports: Orm,
})
export class MongodbModule { }
