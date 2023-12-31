/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors()
  const globalPrefix = 'api';

  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3000;

  await app.listen(port);
}

void bootstrap();
