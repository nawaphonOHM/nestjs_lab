import { INestApplication, VersioningType } from '@nestjs/common';
import { UriVersioningOptions } from '@nestjs/common/interfaces';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app: INestApplication = await NestFactory.create(AppModule);

  const versioning: UriVersioningOptions = { type: VersioningType.URI };

  app.enableVersioning(versioning);
  await app.listen(3000);
}
bootstrap();
