import { IsString, IsNumber, IsOptional, IsNotEmpty, IsArray } from 'class-validator';

export class CreateMovieDTO {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @IsOptional()
  imdbRating?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  cast?: string[];
}
