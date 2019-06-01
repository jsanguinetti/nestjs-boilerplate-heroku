import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { QueryFailedError } from 'typeorm';
import { Request, Response } from 'express';


@Catch(QueryFailedError)
export class EntitiesExceptionFilter implements ExceptionFilter {
  public catch(exception: QueryFailedError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = 422;

    response
      .status(status)
      .json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
        message: exception.message,
      });
  }
}
