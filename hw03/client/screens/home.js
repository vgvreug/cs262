import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Button, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {globalStyles} from '../styles/global';


export default function HomeScreen({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);

    useEffect(() => {
      fetch('https://infinite-spire-94567.herokuapp.com/players/')
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        fetch('https://infinite-spire-94567.herokuapp.com/DogScores/')
            .then((response) => response.json())
            .then((json) => setData2(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
      }, []);


    return (
        <View style={{ flex: 1, padding: 24}}>
            {/* Get rid of that ugly button and, instead, display our list of movies. */}
            <FlatList data={data} keyExtractor={({ id }, index) => id.toString()}
                renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
                    <Text>{ item.email }</Text>
                </TouchableOpacity>
            )} />
            
            <Text>Dogbreath's scores from most recent to least:</Text>
            <FlatList data={data2} keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
                    <Text>{ item.score }</Text>
            )} />
            <Button
                onPress={() => navigation.navigate('About')}
                title="About"
                color="#841584"
            />
        </View>
    );
}