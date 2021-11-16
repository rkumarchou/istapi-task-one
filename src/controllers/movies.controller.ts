import { Controller, Body, Get, Post, HttpCode, UseBefore } from 'routing-controllers';
import { OpenAPI } from 'routing-controllers-openapi';
import { validationMiddleware } from '@middlewares/validation.middleware';
import MovieService from '@/services/movie.service';
import { CreateMovieDTO } from '@/dtos/movies.dto';
import { Movie } from '@/interfaces/movies.interface';
import authMiddleware from '@/middlewares/auth.middleware';

@Controller()
export class MoviesController {
  public movieService = new MovieService();

  @Post('/movie')
  @HttpCode(201)
  @UseBefore(validationMiddleware(CreateMovieDTO, 'body'))
  @OpenAPI({ summary: 'Create a movie from the given body' })
  async createMovie(@Body() movieData: Partial<Movie>) {
    const newMovie: Movie = await this.movieService.createMovie(movieData);
    return { data: newMovie, message: 'createMovie' };
  }

  @Get('/movies')
  @UseBefore(authMiddleware)
  @OpenAPI({ summary: 'Return a list of Movies based on criteria' })
  async getMovies() {
    const getTheMovies: Movie[] = await this.movieService.getMovies();
    return { data: getTheMovies, message: 'getMovies' };
  }
}