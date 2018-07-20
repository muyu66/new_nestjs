import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { IType } from '../interface';

@Catch()
export class AnyExceptionFilter implements ExceptionFilter {

    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        let statusCode: number;
        let message: string;
        const debug: IType.ObjectLiteral = {};

        if (exception.message.statusCode && exception.message.error) {
            statusCode = exception.message.statusCode;
            message = exception.message.error;
        } else if (exception.response && exception.response.data.statusCode && exception.response.data.message) {
            // 兼容标准的 nestjs
            statusCode = exception.response.data.statusCode;
            message = exception.response.data.message;
        } else {
            statusCode = 500;
            message = '服务故障';
        }

        response
            .status(statusCode ? this.getCode(statusCode) : 500)
            .json({
                statusCode,
                message,
                timestamp: new Date().toISOString(),
                path: request.url,
                debug,
            });
    }

    /**
     * 将 40001, 转换成 400
     *
     * @private
     * @param {number} status_code
     * @returns
     * @memberof AnyExceptionFilter
     */
    private getCode(status_code: number) {
        return Number(String(status_code).substr(0, 3));
    }

}
