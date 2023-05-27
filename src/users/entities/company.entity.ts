import { ApiProperty } from '@nestjs/swagger';

export class Company {
  @ApiProperty({ description: 'Company name of the user', type: String })
  name: string;
  @ApiProperty({
    description: 'Catch phrase of the company',
    type: String,
  })
  catchPhrase: string;
  @ApiProperty({ description: 'BS of the company', type: String })
  bs: string;
}
