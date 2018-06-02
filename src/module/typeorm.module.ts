import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as config from 'config';
import { TestEntity } from 'database/entity';

const { host, port, username, password, database } = config.get('database.mysql');

const Typeorm = [
    TypeOrmModule.forRoot({
        type: 'mysql',
        host,
        port,
        username,
        password,
        database,
        entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
        logging: ['error'],
        logger: 'advanced-console',
    }),
    TypeOrmModule.forFeature([TestEntity]),
];

@Module({
    imports: Typeorm,
    exports: Typeorm,
})
export class TypeormModule { }
