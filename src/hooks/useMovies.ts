import { endpoints } from './../config';
import { MovieResponse, Movie } from './../interfaces/movie';
import { useEffect, useCallback, useState } from 'react';
import moviesAPI from '../api/moviesAPI';
interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

export function useMovies() {
  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getMovies = useCallback(async () => {
    try {
      const promises = Object.values(endpoints).map(endpoint =>
        moviesAPI.get<MovieResponse>(endpoint),
      );
      const response = await Promise.all(promises);

      setMoviesState(current => {
        const newState: any = {};
        Object.keys(current).forEach((key, index) => {
          newState[key] = response[index].data.results;
        });
        return newState;
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return {
    ...moviesState,
    isLoading,
  };
}
