import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { colors } from '../config';
import { useMovies } from '../hooks/useMovies';

export function Home() {
  const { isLoading, nowPlaying } = useMovies();

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator color={colors.PRIMARY} size={100} />
      </View>
    );
  }

  return (
    <View>
      <Text>{nowPlaying[0].title}</Text>
    </View>
  );
}
