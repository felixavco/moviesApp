import { endpoints } from './../config';
import { NowPlayingResponse, Movie } from './../interfaces/movie';
import { useEffect, useCallback, useState } from 'react';
import moviesAPI from '../api/moviesAPI';

export function useMovies() {
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getMovies = useCallback(async () => {
    try {
      const response = await moviesAPI.get<NowPlayingResponse>(
        endpoints.NOW_PLAYING,
      );
      setNowPlaying(response.data.results);
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
    nowPlaying,
    isLoading,
  };
}
