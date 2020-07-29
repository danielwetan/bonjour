import React from 'react';
import {View, Text} from 'react-native';

import {Provider} from 'react-redux';
import storage from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
const {store, persistor} = storage;

import Chats from './src/screens/Chats';
import Login from './src/screens/Login';
import Register from './src/screens/Register';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Chats" component={Chats} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Profile" component={Register} />
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
