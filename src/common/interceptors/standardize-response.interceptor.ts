import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, catchError, map, throwError } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class StandardizeResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const requestId = uuidv4();

    return next.handle().pipe(
      map((data) => ({ requestId, data })),
      catchError((error) => {
        return throwError(() => error);
      }),
    );
  }
}
