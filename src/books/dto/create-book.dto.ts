import { IsString, IsNotEmpty, IsNumber, IsDateString } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  author: string;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsNumber()
  price: number;

  @IsNumber()
  rating: number;

  @IsDateString()
  publishedDate: string;
}
