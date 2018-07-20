import { Query, Resolver, ResolveProperty, Mutation } from '@nestjs/graphql';
import { TestService } from '../../service';

@Resolver('Test')
export class TestResolver {
    constructor(
        private readonly testService: TestService,
    ) { }

    @Query('tests')
    async getManyTest(obj, args, context, info) {
        return await this.testService.findManyTest();
    }

    @Query('test')
    async getOneTest(obj, args, context, info) {
        const { id } = args;
        return await this.testService.findOneTest(id);
    }

    @ResolveProperty('contents')
    async getManyContent(test, args, context, info) {
        const { id } = test;
        return await this.testService.findManyContent(id);
    }

    @Mutation()
    async updateContentText(_, { contentId }) {
        return await this.testService.updateOneContent(contentId, 'test');
    }

}