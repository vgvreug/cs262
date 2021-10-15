import React, { useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {globalStyles} from '../styles/global';

export default function AboutScreen({ navigation }) {
    return(
    <View style={globalStyles.container}>
        <Button
            onPress={() => navigation.navigate('Players')}
            title="Return to Home"
            color="#841584"/>
    </View>
    );
}