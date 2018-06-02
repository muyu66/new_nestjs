import { Document } from 'mongoose';
export declare namespace IAttribute {
    interface Base extends Document {
    }
    interface ITest extends Base {
        name: string;
    }
}
