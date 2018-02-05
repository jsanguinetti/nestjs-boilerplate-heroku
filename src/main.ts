import * as env from 'dotenv';
import 'reflect-metadata';
import * as logger from 'morgan';
env.config();

import * as express from 'express';
import * as bodyParser from 'body-parser';

import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import { initDocumentation } from './documentation';
import { EntitiesExceptionFilter } from './http-exception.filter';

async function bootstrap() {
    const server = express();
    server.use(logger(process.env.NODE_ENV));
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: false }));

    const app = await NestFactory.create(ApplicationModule, server);
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
