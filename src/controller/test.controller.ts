import { Get, Post, Controller, Body, UseGuards } from '@nestjs/common';
import { CreateTestDto } from '../dto/index';
import { TestService } from '../service/index';
import { PipeValidation } from '../pipe/index';
import { DUser, DLimit } from '../decorator/index';
import { } from '../const/index';
import { GuardLimit } from '../guard/index';
import { BaseController } from './base.controller';

@Controller('tests')
export class TestController extends BaseController {

    constructor(
        private readonly testService: TestService,
    ) { super(); }

    @Post()
    @UseGuards(GuardLimit)
    @DLimit(10)
    public async createOne(@Body(new PipeValidation()) body: CreateTestDto) {
        return await this.testService.createOne(body);
    }

    @Get()
    public async findAll() {
        return await this.testService.findAll();
    }

    @Get('/string')
    public async findString() {
        return await this.testService.findString();
    }

}
