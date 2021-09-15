import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, ActivityIndicator, ScrollView } from 'react-native';

import { colors } from '../config';
import { useMovies } from '../hooks/useMovies';

import MovieList from '../components/MovieList';
import MoviesCarousel from '../components/MoviesCarousel';

export function Home() {
  const { isLoading, nowPlaying, popular, topRated, upcoming } = useMovies();

  const { top } = useSafeAreaInsets();

  const content = () => {
    if (isLoading) {
      return <ActivityIndicator color={colors.PRIMARY} size={100} />;
    }
    return (
      <>
        <MoviesCarousel movies={nowPlaying} />
        <MovieList movies={popular} title="Popular" />
        <MovieList movies={topRated} title="Top Rated" />
        <MovieList movies={upcoming} title="Upcoming" />
      </>
    );
  };

  return (
    <ScrollView>
      <View style={{ marginTop: top + 25 }}>{content()}</View>
    </ScrollView>
  );
}
