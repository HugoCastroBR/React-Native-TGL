import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import FontText from './components/UI/FontText/FontText';
import { Provider as PaperProvider } from 'react-native-paper';
import TabManager from './routes/navigation/AppTab';
import StackManager from './routes/navigation/Stack';
import { ThemeProvider } from 'styled-components/native';
import { defaultTheme } from './theme';
import { useFonts } from 'expo-font';
import * as Font from 'expo-font';
import theme from './theme/PaperTheme';

import { Provider } from 'react-redux';
import store from './store';

export default function App() {

  const [loaded] = useFonts({
    HelveticaUltraLight: require('./assets/fonts/HelveticaNeue.ttf'),
    HelveticaThin: require('./assets/fonts/HelveticaNeueThin.ttf'),
    HelveticaLight: require('./assets/fonts/HelveticaNeueLight.ttf'),
    HelveticaMedium: require('./assets/fonts/HelveticaNeueMedium.ttf'),
    HelveticaBold: require('./assets/fonts/HelveticaNeueBold.ttf'),
    HelveticaHeavy: require('./assets/fonts/HelveticaNeueHv.ttf'),
    //  Italic
    HelveticaItalic: require('./assets/fonts/HelveticaNeueIt.ttf')
  })
  const [fontloaded,setfontloaded] = useState(false);

  const fetchFonts = () => {
    return Font.loadAsync({
      HelveticaUltraLight: require('./assets/fonts/HelveticaNeue.ttf'),
      HelveticaThin: require('./assets/fonts/HelveticaNeueThin.ttf'),
      HelveticaLight: require('./assets/fonts/HelveticaNeueLight.ttf'),
      HelveticaMedium: require('./assets/fonts/HelveticaNeueMedium.ttf'),
      HelveticaBold: require('./assets/fonts/HelveticaNeueBold.ttf'),
      HelveticaHeavy: require('./assets/fonts/HelveticaNeueHv.ttf'),
      //  Italic
      HelveticaItalic: require('./assets/fonts/HelveticaNeueIt.ttf')
    }).then(() => setfontloaded(true))
  };

  useEffect(() => {
    fetchFonts()
  },
    [])
  

  if(fontloaded){
    return (
      <Provider store={store}>
        <NavigationContainer>
        <ThemeProvider theme={defaultTheme}>
          <PaperProvider theme={theme}>
            <StackManager/>
          </PaperProvider>
        </ThemeProvider>
      </NavigationContainer>
      </Provider>
      
      
    );
  }else{
    return (
      <View>
        <Text>
          Error
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
