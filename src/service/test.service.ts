import { Injectable } from '@nestjs/common';
import { BaseService } from './base.service';
import { TestDao } from '../dao';
import { CreateTestDto } from '../dto';
import { IType } from '../interface';
import { _ } from '../common';

const tests = [{ id: '1' }, { id: '2' }];
const contents = [
    { id: '1', testId: '1', text: '' },
    { id: '2', testId: '1', text: '' },
    { id: '3', testId: '2', text: '' },
];

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

    public async findString() {
        return { status: 'ok' };
    }

    public async findManyTest() {
        return tests;
    }

    public async findOneTest(id: IType.ID) {
        return _.find(tests, { id });
    }

    public async findManyContent(testId: IType.ID) {
        return _.filter(contents, { testId });
    }

    public async updateOneContent(id: IType.ID, value: string) {
        const content = _.find(contents, { id });
        if (!content) throw Error('没有 content');

        content.text = value;
        return content;
    }

}