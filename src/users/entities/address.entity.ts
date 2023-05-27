import { ApiProperty } from '@nestjs/swagger';

export class Address {
  @ApiProperty({ description: 'The street of the user', type: String })
  street: string;
  @ApiProperty({ description: 'The suite of the user', type: String })
  suite: string;
  @ApiProperty({ description: 'The city of the user', type: String })
  city: string;
  @ApiProperty({ description: 'The zipcode of the user', type: String })
  zipcode: string;
  @ApiProperty({ description: 'The geo of the user', type: Object })
  geo: {
    // Could split into another entity but you get the idea
    lat: number;
    lng: number;
  };
}
