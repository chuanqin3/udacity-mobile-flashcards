import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import DecksScreen from '../screens/DecksScreen';
import AddDeckScreen from '../screens/AddDeckScreen';
import SettingsScreen from '../screens/SettingsScreen';
import DeckDetailsScreen from '../screens/DeckDetailScreen';
import AddCardScreen from '../screens/AddCardScreen'
import QuizScreen from '../screens/QuizScreen'
import ScoreScreen from '../screens/ScoreScreen'

const DecksStack = createStackNavigator({
  Decks: { screen: DecksScreen },
  DeckDetail: { screen: DeckDetailsScreen },
  AddCard: { screen: AddCardScreen},
  Quiz: { screen: QuizScreen },
  Score: { screen: ScoreScreen },
}, {
  initialRouteName: 'Decks',
});

DecksStack.navigationOptions = {
  tabBarLabel: 'Decks',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-albums${focused ? '' : '-outline'}`
          : 'albums'
      }
    />
  ),
};

const AddDeckStack = createStackNavigator({
  Add: AddDeckScreen,
});

AddDeckStack.navigationOptions = {
  tabBarLabel: 'Add Deck',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-add-circle${focused ? '' : '-outline'}` : 'add-circle'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  DecksStack,
  AddDeckStack,
  SettingsStack,
});
