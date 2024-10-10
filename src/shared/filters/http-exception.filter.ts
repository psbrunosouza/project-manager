import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import {
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
} from '@prisma/client/runtime/library';
@Catch(PrismaClientValidationError, PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter {
  catch(
    exception: PrismaClientValidationError | PrismaClientKnownRequestError,
    host: ArgumentsHost,
  ) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = HttpStatus.BAD_REQUEST;

    let errorResponse = {
      statusCode: status,
      message: exception.message,
    };

    if (exception instanceof PrismaClientKnownRequestError) {
      errorResponse = {
        ...errorResponse,
        meta: exception.meta,
      } as any;
    } else if (exception instanceof PrismaClientValidationError) {
      errorResponse = {
        ...errorResponse,
      };
    }

    response.status(status).json(errorResponse);
  }
}
