import React, { useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {globalStyles} from './styles/global';
import{HomeScreen} from './screens/home';
import{DetailsScreen} from './screens/details';


const Stack = createNativeStackNavigator();

function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Overview'}}
        />
        <Stack.Screen name="Details" component={DetailsScreen} initialParams={{itemId: 42}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;