import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Movie } from '../interfaces/movie';
import { RootStackParamList } from '../navigation/Stack';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

export default function MoviePoster({
  movie,
  width = 300,
  height = 420,
}: Props) {
  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>();
  const src = { uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` };
  console.log('navigation', navigate);
  const onPress = () => navigate('Details', { movie });

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ ...styles.container, height, width }}>
      <View style={styles.shadow}>
        <Image source={src} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
}

const borderRadius = 15;

const styles = StyleSheet.create({
  container: {
    borderRadius,
    marginHorizontal: 8,
  },
  image: {
    flex: 1,
    borderRadius,
  },
  shadow: {
    flex: 1,
    elevation: 15,
    borderRadius,
    shadowRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
  },
});
