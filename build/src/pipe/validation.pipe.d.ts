import { PipeTransform, ArgumentMetadata } from '@nestjs/common';
export declare class PipeValidation implements PipeTransform<any> {
    transform(value: any, metadata: ArgumentMetadata): Promise<any>;
    private toValidate;
}
