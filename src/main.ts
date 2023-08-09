import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  NestFastifyApplication,
  FastifyAdapter,
} from '@nestjs/platform-fastify';
import { OgmaService } from '@ogma/nestjs-module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ trustProxy: true, logger: false }),
  );

  // ** Logger
  //const logger = await app.get<OgmaService>(OgmaService)
  const logger = await app.resolve<OgmaService>(OgmaService)
   app.useLogger(logger)

  await app.listen(3000).then(() => {
    logger.log(
      `...🚀 API OGMA testing  starting on port: 3000 `,
    )
  });
}
bootstrap();


