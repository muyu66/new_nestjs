import { Injectable } from '@nestjs/common';
import { BaseDao } from './base.dao';
import { InjectModel } from '@nestjs/mongoose';
import { IType, IAttribute } from 'interface';
import { Model } from 'mongoose';

@Injectable()
export class TestDao extends BaseDao {

    constructor(
        @InjectModel('test') private readonly testModel: Model<IAttribute.ITest>,
    ) { super(); }

    public async createOne(data: Partial<IAttribute.ITest>) {
        return await this.testModel.create(data);
    }

    public async findAll() {
        return await this.testModel.find();
    }

    public async findOne(where: Partial<IAttribute.ITest>) {
        return await this.testModel.findOne({ where });
    }

    public async findMany(where: Partial<IAttribute.ITest>) {
        return await this.testModel.find({ where });
    }

}