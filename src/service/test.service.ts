import { Injectable } from '@nestjs/common';
import { BaseService } from './base.service';
import { TestDao } from '../dao';
import { CreateTestDto } from '../dto';

@Injectable()
export class TestService extends BaseService {

    constructor(
        private readonly testDao: TestDao,
    ) { super(); }

    public async createOne(data: CreateTestDto) {
        return await this.testDao.createOne(data);
    }

    public async findAll() {
        return await this.testDao.findAll();
    }

}