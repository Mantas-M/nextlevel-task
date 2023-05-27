import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { User } from './entities/user.entity';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class UsersService {
  private readonly apiLink: string;

  constructor(private readonly configService: ConfigService) {
    this.apiLink = this.configService.get<string>('API_LINK');
  }

  async getAllUsers(): Promise<User[]> {
    try {
      const response = await axios.get(this.apiLink);
      return response.data;
    } catch (error) {
      throw new HttpException(
        'Failed to retrieve users from the API',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getUser(id: string): Promise<User> {
    try {
      const response = await axios.get(`${this.apiLink}/${id}`);
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        throw new NotFoundException(`User with ID ${id} not found.`);
      }
      throw new HttpException(
        'Failed to retrieve user from the API',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
