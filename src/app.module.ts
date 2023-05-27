import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { CommonModule } from './common/common.module';
import * as Joi from '@hapi/joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      validationSchema: Joi.object({
        API_LINK: Joi.string().required(),
        AUTH_USERNAME: Joi.string().required().default('admin'),
        AUTH_PASSWORD: Joi.string().required().default('password'),
      }),
    }),
    UsersModule,
    CommonModule,
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {}
