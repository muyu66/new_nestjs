export namespace IType {

    export type ID = 'string';

    export interface ObjectLiteral {
        [key: string]: any;
    }

    export type OrmOrder = {
        [P in keyof ObjectLiteral]?: 'ASC' | 'DESC' | 1 | -1;
    };

}
