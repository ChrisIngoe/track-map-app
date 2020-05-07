import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Location from 'expo-location';

const LOCATION_TASK_NAME = 'background-location-task';

const BackgroundLocation = () => {
  const [locations, setLocations] = useState(null);
  const [status, setStatus] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);

  const startLocationHandler = async () => {
    //let { permissionsStatus } = await Location.requestPermissionsAsync();
    //if (permissionsStatus !== 'granted') {
    //  setErrorMsg('Permission to access location was denied');
    //}
    //let { locationStatus } = await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME);
    //console.info(locationStatus);
    //setStatus(status);
    //let location = await Location.getCurrentPositionAsync({});
    //setLocation(location);
  };

  const stopLocationHandler = async () => {
    let { locationStatus } = await Location.stopLocationUpdatesAsync(LOCATION_TASK_NAME);
    //setStatus(status);
    console.info(locationStatus);
  };

  return (
    <View style={styles.locationContainer}>
      <Text>{JSON.stringify(status)}</Text>
      <Text>{errorMsg}</Text>
      <Button onPress={startLocationHandler} title="Start Tracking" color="#841584" accessibilityLabel="Start tracking" />
      <Button onPress={stopLocationHandler} title="Stop Tracking" color="#841584" accessibilityLabel="Stop tracking" />
    </View>
  );
};

const styles = StyleSheet.create({
  locationContainer: {},
});

export default BackgroundLocation;
