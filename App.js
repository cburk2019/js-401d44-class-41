import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Constants from 'expo-constants';

import Sail from './components/Sail'; // import from local files

import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Welcome to Davy Jones' locker! Steer wearily cap'n..
      </Text>
      <Card>
        <Sail />
      </Card>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'start',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#00B9F2',
    padding: 8,
  },
  paragraph: {
    margin: 23,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#f2f2ed'
  }
});
