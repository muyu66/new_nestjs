import { Document } from 'mongoose';

export namespace IAttribute {

    interface Base {

    }

    export interface MTest extends ITest, Document {
    }
    export interface ITest extends Base {
        name: string;
    }

}