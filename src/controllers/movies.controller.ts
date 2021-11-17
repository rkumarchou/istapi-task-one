import { Controller, Body, Get, Post, HttpCode, UseBefore, QueryParams } from 'routing-controllers';
import { OpenAPI } from 'routing-controllers-openapi';
import { validationMiddleware } from '@middlewares/validation.middleware';
import MovieService from '@/services/movie.service';
import { CreateMovieDTO, GetMoviesQP } from '@/dtos/movies.dto';
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
  @HttpCode(200)
  @UseBefore(authMiddleware)
  @OpenAPI({ summary: 'Return a list of Movies based on criteria' })
  async getMovies(@QueryParams() params: GetMoviesQP) {
    const getTheMovies: Movie[] = await this.movieService.getMovies(params);
    return { data: getTheMovies, message: 'getMovies' };
  }
}
