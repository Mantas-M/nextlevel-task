import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class BasicAuthGuard implements CanActivate {
  constructor(private readonly configService: ConfigService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    const authUsername = request.headers.username;
    const authPassword = request.headers.password;

    return (
      this.configService.get('AUTH_USERNAME') === authUsername &&
      this.configService.get('AUTH_PASSWORD') === authPassword
    );
  }
}
