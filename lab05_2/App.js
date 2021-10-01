import React, { useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {globalStyles} from './styles/global';
import HomeScreen from './screens/home';
import DetailsScreen from './screens/details';
import AboutScreen from './screens/about';
import Header from './shared/headers';


const Stack = createNativeStackNavigator();

function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={({ navigation }) => ({
    headerRight: () => (
        <Header navigation={navigation}/>
    )
})} />
        <Stack.Screen name="Details" component={DetailsScreen} initialParams={{itemId: 42}} options={({ navigation }) => ({
    headerRight: () => (
        <Header navigation={navigation}/>
    )
})}/>
        <Stack.Screen name="About" component={AboutScreen} options={{ title: 'About'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;