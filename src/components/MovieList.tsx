import React from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import { Movie } from '../interfaces/movie';
import MoviePoster from './MoviePoster';

interface Props {
  movies: Movie[];
  title: string;
}

export default function MovieList({ movies, title }: Props) {
  const keyStractor = (item: Movie) => item.id.toString();
  const renderItem = ({ item }: any) => (
    <MoviePoster movie={item} width={140} height={200} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={keyStractor}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 260,
    marginBottom: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
});
