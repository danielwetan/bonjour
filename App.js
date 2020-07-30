import React from 'react';
import {View, Text} from 'react-native';

import {Provider} from 'react-redux';
import storage from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
const {store, persistor} = storage;

import Chats from './src/screens/Chats';
import Contacts from './src/screens/Contacts';
import Profile from './src/screens/Profile';
import Maps from './src/screens/Maps';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const ChatsStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Chats" component={Chats} />
    </Stack.Navigator>
  );
};

const ContactsStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Contacts" component={Contacts} />
    </Stack.Navigator>
  );
};

const ProfileStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

const MapsStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Maps" component={Maps} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            <Tab.Navigator>
              <Tab.Screen name="Chats" component={ChatsStackScreen} />
              <Tab.Screen name="Contacts" component={ContactsStackScreen} />
              <Tab.Screen name="Mraps" component={MapsStackScreen} />
              <Tab.Screen name="Profile" component={ProfileStackScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
