import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class GuardLimit implements CanActivate {

    constructor(private readonly reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean {
        const level = this.reflector.get<number>('level', context.getHandler());
        if (!level) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        return true;
    }

}