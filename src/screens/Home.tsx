import React from 'react';
import { View, ActivityIndicator, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { colors } from '../config';
import { useMovies } from '../hooks/useMovies';

import Carousel from 'react-native-snap-carousel';
import MoviePoster from '../components/MoviePoster';

export function Home() {
  const { isLoading, nowPlaying } = useMovies();

  const { top } = useSafeAreaInsets();
  const { width: windowWidth } = Dimensions.get('window');

  const renderItem = ({ item }: any) => <MoviePoster movie={item} />;

  const content = () => {
    if (isLoading) {
      return <ActivityIndicator color={colors.PRIMARY} size={100} />;
    }
    return (
      <View style={{ height: 475 }}>
        <Carousel
          data={nowPlaying}
          renderItem={renderItem}
          sliderWidth={windowWidth}
          itemWidth={300}
        />
      </View>
    );
  };

  return <View style={{ marginTop: top + 25 }}>{content()}</View>;
}
