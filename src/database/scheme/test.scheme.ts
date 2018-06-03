import { ConstEntity } from '../../const/index';
import { BaseScheme } from './base.scheme';
import * as mongoose from 'mongoose';
import { _ } from '../../common';
const Types = mongoose.Schema.Types;

export const TestScheme = new mongoose.Schema(_.assign(BaseScheme, {
    name: { required: true, type: String },
}), { collection: _.snakeCase('test'), timestamps: true });