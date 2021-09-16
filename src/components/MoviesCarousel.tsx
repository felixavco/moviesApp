import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Movie } from '../interfaces/movie';
import MoviePoster from './MoviePoster';

interface Props {
  movies: Movie[];
}

export default function MoviesCarousel({ movies }: Props) {
  const { width: windowWidth } = Dimensions.get('window');

  const renderItem = ({ item }: { item: Movie }) => (
    <MoviePoster movie={item} />
  );

  return (
    <View style={styles.nowPlaying}>
      <Carousel
        data={movies}
        itemWidth={300}
        renderItem={renderItem}
        sliderWidth={windowWidth}
        inactiveSlideOpacity={0.85}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  nowPlaying: { height: 475 },
});
