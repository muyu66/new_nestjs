import { test } from 'ava';
import * as request from 'supertest';
import { AppModule } from '../../src/module/app.module';
import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as util from 'util';
import { AnyExceptionFilter } from '../../src/filter/any_exception.filter';

// 原生方法注入
console.debug = (...objs: any[]): void => {
    for (const obj of objs) {
        console.log(util.inspect(obj, true, 8, true));
    }
};

let app: INestApplication;

test.before(async t => {
    const module = await Test.createTestingModule({
        imports: [AppModule],
    }).compile();

    app = module.createNestApplication();
    app.useGlobalFilters(new AnyExceptionFilter());
    await app.init();
});

test(`Test - getString`, async t => {
    const res = await request(app.getHttpServer())
        .get('/tests/string')
        .timeout(30000)
        .send();

    const expect = { status: 'ok' };
    const actual = res.body;

    t.deepEqual(actual, expect);
});
