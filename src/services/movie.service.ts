import { HttpException } from '@exceptions/HttpException';
import movieModel from '@models/movies.model';
import { isEmpty } from '@utils/util';
import { Movie } from '@/interfaces/movies.interface';
import { logger } from '@/utils/logger';

class MovieService {
  public movies = movieModel;

  public async createMovie(data: Partial<Movie>): Promise<Movie> {
    try {
      const identity = this.movies[this.movies.length - 1].id || 0;
      const { cast = [], description = '', imdbRating = null, title } = data;
      if (isEmpty(title)) throw new HttpException(400, 'Please provide a valid title');
      logger.info('Creating a new movie');
      const newMovie: Movie = {
        id: identity + 1,
        cast,
        description,
        imdbRating,
        title,
      };
      this.movies.push(newMovie);
      return newMovie;
    } catch (e) {
      throw new HttpException(500, 'Caught while creating movie name');
    }
  }

  public async getMovies(): Promise<Movie[]> {
    try {
      return this.movies;
    } catch (e) {
      throw new HttpException(500, 'Caught while getting movie name');
    }
  }
}

export default MovieService;
