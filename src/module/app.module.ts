import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { ControllerModule } from './controller.module';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { GraphQLModule, GraphQLFactory } from '@nestjs/graphql';
import { GraphqlModule } from './graphql.module';

@Module({
    imports: [ControllerModule, GraphQLModule, GraphqlModule],
})
export class AppModule implements NestModule {

    constructor(private readonly graphQLFactory: GraphQLFactory) { }

    configure(consumer: MiddlewareConsumer) {
        const typeDefs = this.graphQLFactory.mergeTypesByPaths('./**/*.graphql');
        const schema = this.graphQLFactory.createSchema({ typeDefs });

        consumer
            .apply(graphiqlExpress({ endpointURL: '/graphql' }))
            .forRoutes('/graphiql')
            .apply(graphqlExpress(req => ({ schema, rootValue: req })))
            .forRoutes('/graphql');
    }

}
