import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Movie } from '../interfaces/movie';

interface Props {
  movie: Movie;
}

export default function MoviePoster({ movie }: Props) {
  const src = { uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` };
  const onPress = () => null;

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.shadow}>
        <Image source={src} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
}

const borderRadius = 15;

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 420,
    borderRadius,
  },
  image: {
    flex: 1,
    borderRadius,
  },
  shadow: {
    flex: 1,
    elevation: 30,
    borderRadius,
    shadowRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
  },
});
