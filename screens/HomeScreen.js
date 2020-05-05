import React from 'react';
import { Image, Platform, StyleSheet, View, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function HomeScreen() {
  const onPressStart = () => {
    console.log('Start pressed');
  };
  const onPressStop = () => {
    console.log('Stop pressed');
  };
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Image source={__DEV__ ? require('../assets/images/robot-dev.png') : require('../assets/images/robot-prod.png')} style={styles.welcomeImage} />
        </View>

        <View style={styles.controllerContainer}>
          <Button onPress={onPressStart} title="Start Tracking" color="#841584" accessibilityLabel="Start tracking" />
        </View>

        <View style={styles.controllerContainer}>
          <Button onPress={onPressStop} title="Stop Tracking" color="#841584" accessibilityLabel="Stop tracking" />
        </View>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  controllerContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
    marginVertical: 7,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
});
