import { TestService } from '../../src/service';
import { AppModule } from '../../src/module/app.module';
import { NestFactory } from '@nestjs/core';
import { test } from 'ava';

// function reflection<T>(targetClass: T, targetFunction: string): (...p) => any {
//     return targetClass[targetFunction];
// }

let testService: TestService;
test.before(async t => {
    const app = await NestFactory.createApplicationContext(AppModule);
    testService = app.get(TestService);
});

test(`getString`, async t => {
    const expect = { status: 'ok' };
    const actual = await testService.findString();

    t.deepEqual(actual, expect);
});