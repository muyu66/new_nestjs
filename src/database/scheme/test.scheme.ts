import { ConstEntity } from '../../const/index';
import { BaseScheme } from './base.scheme';
import * as mongoose from 'mongoose';
import { _ } from '../../common';

export const TestScheme = new mongoose.Schema(_.assign(BaseScheme, {
    name: String,
}));