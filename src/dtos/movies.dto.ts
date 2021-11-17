import { IsString, IsNumber, IsOptional, IsNotEmpty, IsArray, isString } from 'class-validator';

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

export class GetMoviesQP {
  @IsNumber()
  @IsOptional()
  id?: number;

  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  cast?: string;
}
