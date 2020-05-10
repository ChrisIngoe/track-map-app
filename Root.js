import React, { useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import useLinking from './navigation/useLinking';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import * as TaskManager from 'expo-task-manager';
import * as Location from 'expo-location';
import { LocationContext } from './components/LocationContext';

const Stack = createStackNavigator();
const LOCATION_TASK_NAME = 'background-location-task';

export default function Root(props) {
  const { setNewLocations } = useContext(LocationContext);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  TaskManager.defineTask(LOCATION_TASK_NAME, ({ data: { locations }, error }) => {
    if (error) {
      return;
    }
    if (locations) {
      setNewLocations(locations);
    }
  });

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        await Location.requestPermissionsAsync();
        await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME);
      } catch (e) {
        console.warn(e);
      } finally {
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return (
    <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
      <Stack.Navigator>
        <Stack.Screen name="Root" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
