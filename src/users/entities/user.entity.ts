import { ApiProperty } from '@nestjs/swagger';
import { Address } from './address.entity';
import { Company } from './company.entity';

export class User {
  @ApiProperty({ description: 'The id of the user', type: Number })
  id: number;
  @ApiProperty({ description: 'The name of the user', type: String })
  name: string;
  @ApiProperty({ description: 'The username of the user', type: String })
  username: string;
  @ApiProperty({ description: 'The email of the user', type: String })
  email: string;
  @ApiProperty({ description: 'The address of the user', type: Address })
  address: Address;
  @ApiProperty({ description: 'The phone number of the user', type: String })
  phone: string;
  @ApiProperty({ description: 'The website of the user', type: String })
  website: string;
  @ApiProperty({ description: 'The company of the user', type: Company })
  company: Company;
}
