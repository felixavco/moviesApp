import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text } from 'react-native';
import { RootStackParamList } from '../navigation/Stack';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

export function Details({ route }: Props) {
  // const route = useRoute<RouteProp<RootStackParamList, 'Details'>>();
  const { title } = route.params.movie;
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}
