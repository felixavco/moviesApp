import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, ActivityIndicator, ScrollView } from 'react-native';

import { colors } from '../config';
import { useMovies } from '../hooks/useMovies';

import MovieList from '../components/MovieList';
import MoviesCarousel from '../components/MoviesCarousel';

export function Home() {
  const { isLoading, nowPlaying } = useMovies();

  const { top } = useSafeAreaInsets();

  const content = () => {
    if (isLoading) {
      return <ActivityIndicator color={colors.PRIMARY} size={100} />;
    }
    return (
      <>
        <MoviesCarousel movies={nowPlaying} />
        <MovieList movies={nowPlaying} title="Hola" />
      </>
    );
  };

  return (
    <ScrollView>
      <View style={{ marginTop: top + 25 }}>{content()}</View>
    </ScrollView>
  );
}
