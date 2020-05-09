import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { LocationContext } from '../components/LocationContext';

export default function LocationText() {
  const { locations } = useContext(LocationContext);

  return (
    <View>
      <Text>{JSON.stringify(locations)}</Text>
    </View>
  );
}
