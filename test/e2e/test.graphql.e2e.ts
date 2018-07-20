import * as request from 'supertest';
import { test } from 'ava';
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

test.skip(`Graphql - Test - getTest`, async t => {
    const res = await request(app.getHttpServer())
        .post('/graphql')
        .set('Content-Type', 'application/json')
        .timeout(30000)
        .send('{"query":"query {\n  test(id:\"1\") {\n    id\n    contents {\n      id\n      testId\n      text\n    }\n  }\n}\n","variables":null}');

    const expect = {
        data: {
            test: {
                id: '1',
                contents: [
                    {
                        id: '1',
                        testId: '1',
                        text: '',
                    },
                    {
                        id: '2',
                        testId: '1',
                        text: '',
                    },
                ],
            },
        },
    };
    const actual = res.body;

    t.deepEqual(actual, expect);
});