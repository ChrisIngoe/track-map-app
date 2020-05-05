import React from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Event from '../components/Event';

const events = [
  { id: 1, text: 'GPS location N53.123144 E0.38193838 submitted' },
  { id: 2, text: 'GPS location N53.432344 E0.92339099 submitted' },
  { id: 3, text: 'GPS location N53.937494 E0.57576757 submitted' },
  { id: 4, text: 'GPS location N53.023838 E0.12118344 submitted' },
  { id: 5, text: 'GPS location N53.447778 E0.29057234 submitted' },
  { id: 6, text: 'GPS location N53.103838 E0.09348289 submitted' },
  { id: 7, text: 'GPS location N53.100008 E0.00842345 submitted' },
  { id: 8, text: 'GPS location N53.492888 E0.99847728 submitted' },
  { id: 9, text: 'GPS location N53.120838 E0.90289488 submitted' },
  { id: 10, text: 'GPS location N53.238482 E0.21218834 submitted' },
  { id: 11, text: 'GPS location N53.129091 E0.82388388 submitted' },
];

export default function LinksScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {events.map((event) => {
        return <Event text={event.text} key={`event-${event.id}`} />;
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
});
