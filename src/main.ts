import { NestFactory } from '@nestjs/core';
import { AppModule } from './module/app.module';
import { } from './middleware/index';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        cors: true,
        bodyParser: true,
    });

    // 设置全局前缀
    // app.setGlobalPrefix('v1');

    /**
     * 加载全局中间件
     */

    await app.listen(3000);
}
bootstrap();