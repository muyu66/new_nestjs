import { NestInterceptor, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare class ExecTimeInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, call$: Observable<any>): Observable<any>;
}
