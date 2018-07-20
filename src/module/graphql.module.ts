import { Module } from '@nestjs/common';
import { ServiceModule } from './service.module';
import { TestResolver } from '../graphql/resolver';

@Module({
    imports: [ServiceModule],
    providers: [TestResolver],
})
export class GraphqlModule { }