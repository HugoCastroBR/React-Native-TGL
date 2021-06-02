import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import FontText from './components/FontText/FontText';
import { Provider as PaperProvider } from 'react-native-paper';
import TabManager from './routes/navigation/AppTab';
import StackManager from './routes/navigation/Stack';
import { ThemeProvider } from 'styled-components/native';
import { defaultTheme } from './theme';





export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={defaultTheme}>
        <PaperProvider>
          <StackManager/>
        </PaperProvider>
      </ThemeProvider>
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
