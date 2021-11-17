import { HttpException } from '@exceptions/HttpException';
import movieModel from '@models/movies.model';
import { isEmpty } from '@utils/util';
import { Movie } from '@/interfaces/movies.interface';
import { logger } from '@/utils/logger';
import { GetMoviesQP } from '@/dtos/movies.dto';

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

  public async getMovies(params: GetMoviesQP): Promise<Movie[]> {
    try {
      const { id = null, title = '', cast = '' } = params;
      let resultantMovies: Movie[] = this.movies;
      // Below logic is mimicking the database. With proper db one dont need a lot of JS logic like this
      if (id) resultantMovies = resultantMovies.filter((item: Movie) => item.id === id);
      if (title) resultantMovies = resultantMovies.filter((item: Movie) => item.title.toLowerCase() === title.toLowerCase());
      if (cast) {
        resultantMovies = resultantMovies.filter((item: Movie) => {
          let castMatched = false;
          item.cast.forEach(item => {
            if (item.toLowerCase().includes(cast)) castMatched = true;
          });
          return castMatched;
        });
      }
      return resultantMovies;
    } catch (e) {
      throw new HttpException(500, 'Caught while getting movie name');
    }
  }
}

export default MovieService;
