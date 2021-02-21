import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, FlatList, ScrollView } from 'react-native';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import Home from './screens/Home'
import Test from './screens/Test'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const getFonts = () =>
  Font.loadAsync({
    "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "roboto-medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  const Stack = createStackNavigator();

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)
  if(!fontLoaded){
    return(
      <AppLoading
        startAsync={getFonts}
        onError={console.warn}
        onFinish={() => setFontLoaded(true)}
      />
    )
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
      
          <Stack.Screen
            name="test"
            component={Test}
          />
          <Stack.Screen
            name="home"
            component={Home}
            options={{ title: 'Home Screen' }}
          />
    
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 30,
  }
});
