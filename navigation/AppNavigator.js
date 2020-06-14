import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import DeckList from '../components/DeckList';
import AddDeck from '../components/AddDeck';
import AddCard from '../components/AddCard';
import DeckDetails from '../components/DeckDetails';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name='Decks' component={DeckList} />
    <Tab.Screen name='Add Deck' component={AddDeck} />
  </Tab.Navigator>
);

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
        name='Home'
        component={TabNavigator}
      />
      <Stack.Screen 
        name='Deck Details'
        component={DeckDetails}
        options={({ route }) => ({ title: route.params.title}) }
      />
      <Stack.Screen 
        name='Add Card'
        component={AddCard}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;