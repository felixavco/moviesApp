import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import moviesAPI from '../api/moviesAPI';

const getMovies = async () => {
  try {
    await moviesAPI.get('/now_playing');
  } catch (error) {
    console.log(error);
  }
};

export function Home() {
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}
