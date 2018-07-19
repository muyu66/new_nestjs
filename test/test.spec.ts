import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppModule } from './../src/module/app.module';
import { INestApplication } from '@nestjs/common';

describe('Test', () => {

    let app: INestApplication;

    beforeAll(async () => {
        const module = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = module.createNestApplication();
        await app.init();
    });

    it('/GET /tests', async () => {
        return await request(app.getHttpServer())
            .get('/tests/string')
            .expect(200)
            .expect((res) => {
                expect(res.body === 'ok').toBeTruthy();
            });
    });

    afterAll(async () => {
        await app.close();
    });

});