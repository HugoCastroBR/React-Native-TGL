import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import FontText from './components/FontText/FontText';
import { Provider as PaperProvider } from 'react-native-paper';
import TabManager from './routes/navigation/Tab';

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <TabManager/>
      </PaperProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
