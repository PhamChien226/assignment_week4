import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import ToDoScreen from '../screens/ToDoScreen';
import CompleteTodo from '../screens/CompleteTodo';
import ActiveScreen from '../screens/ActiveScreen';
import SingleTodoScreen from '../screens/SingleTodoScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const ToDoStack = createStackNavigator(
  {
    TodoList: ToDoScreen,
    SingleTodo: SingleTodoScreen
  },
  config
);

ToDoStack.navigationOptions = {
  tabBarLabel: 'TodoList',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={"md-add-circle-outline"}
    />
  ),
};

ToDoStack.path = '';

const CompleteStack = createStackNavigator(
  {
    Complete: CompleteTodo,
  },
  config
);

CompleteStack.navigationOptions = {
  tabBarLabel: 'Completed',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"ios-done-all"} />
  ),
};

CompleteStack.path = '';

const ActiveStack = createStackNavigator(
  {
    Active: ActiveScreen,
  },
  config
);

ActiveStack.navigationOptions = {
  tabBarLabel: 'Active',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

ActiveStack.path = '';

const tabNavigator = createBottomTabNavigator({
  CompleteStack,
  ToDoStack,
  ActiveStack,
});

tabNavigator.path = '';

export default tabNavigator;
