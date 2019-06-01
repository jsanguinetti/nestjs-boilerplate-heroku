import * as env from 'dotenv';
import 'reflect-metadata';
import * as logger from 'morgan';
env.config();

import * as bodyParser from 'body-parser';

import { NestExpressApplication } from '@nestjs/platform-express'
import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import { initDocumentation } from './documentation';
import { EntitiesExceptionFilter } from './http-exception.filter';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(ApplicationModule);

    app.use(logger(process.env.NODE_ENV));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.useGlobalFilters(new EntitiesExceptionFilter());

    initDocumentation(app, {
        version: '0.0.1',
        description: 'Nest boilerplate description.',
        title: 'Nest boilerplate',
        endpoint: '/docs'
    });

    await app.listen(parseInt(process.env.PORT) || 3000);
}

bootstrap();
