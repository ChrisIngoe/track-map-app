import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';

const GpsLocation = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  });

  return (
    <View style={styles.locationContainer}>
      <Text>{JSON.stringify(location)}</Text>
      <Text>{errorMsg}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  locationContainer: {},
});

export default GpsLocation;
