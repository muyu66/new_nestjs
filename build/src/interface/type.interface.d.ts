export declare namespace IType {
    type ID = 'string';
    interface ObjectLiteral {
        [key: string]: any;
    }
    type OrmOrder = {
        [P in keyof ObjectLiteral]?: 'ASC' | 'DESC' | 1 | -1;
    };
}
