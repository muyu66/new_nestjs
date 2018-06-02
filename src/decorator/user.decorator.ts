import { createParamDecorator } from '@nestjs/common';

export const DUser = createParamDecorator((data, req) => {
    return req.user;
});