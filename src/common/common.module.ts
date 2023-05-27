import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { BasicAuthGuard } from './guards/basic-auth.guard';
import { ConfigModule } from '@nestjs/config';
import { LoggingMiddleware } from './middleware/logging.middleware';
import { StandardizeResponseInterceptor } from './interceptors/standardize-response.interceptor';
import { StandardizeExceptionFilter } from './filters/standardize-exeption.filter';

@Module({
  imports: [ConfigModule],
  providers: [
    { provide: APP_GUARD, useClass: BasicAuthGuard },
    { provide: APP_INTERCEPTOR, useClass: StandardizeResponseInterceptor },
    { provide: APP_FILTER, useClass: StandardizeExceptionFilter },
  ],
})
export class CommonModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware).forRoutes('*');
  }
}
