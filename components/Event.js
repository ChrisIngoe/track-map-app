import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

const Event = ({ text, isLastOption }) => {
  return (
    <RectButton style={[styles.event, isLastOption && styles.lastOption]}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.eventIconContainer}>
          <Ionicons name={'md-checkmark'} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.eventTextContainer}>
          <Text style={styles.eventText}>{text}</Text>
        </View>
      </View>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  eventIconContainer: {
    marginRight: 12,
  },
  event: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  eventText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});

export default Event;
