import { BaseScheme } from './base.scheme';
import { Schema } from 'mongoose';
import { _ } from '../../common';

export const TestScheme = new Schema(_.assign(BaseScheme, {
    name: { required: true, type: String },
}), { collection: _.snakeCase('test'), timestamps: true });