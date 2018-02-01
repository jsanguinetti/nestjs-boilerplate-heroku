import { ExceptionFilter, Catch } from '@nestjs/common';
import { HttpException } from '@nestjs/common';
import {QueryFailedError} from 'typeorm';

@Catch(QueryFailedError)
export class EntitiesExceptionFilter implements ExceptionFilter {
  public catch(exception: QueryFailedError, response) {

    response
      .status(422)
      .json({
        statusCode: 422,
        message: exception.message
      });
  }
}
