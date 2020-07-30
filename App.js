/* eslint-disable react-native/no-inline-styles */
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

// import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const ChatsStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerTitleStyle: {
            fontSize: 20,
            fontFamily: 'Quicksand-Bold',
          },
          headerStyle: {
            borderBottomColor: 'red',
            // backgroundColor: 'red',
          },
        }}
        name="Chats"
        component={Chats}
      />
    </Stack.Navigator>
  );
};

const ContactsStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerTitleStyle: {
            fontSize: 20,
            fontFamily: 'Quicksand-Bold',
          },
          headerStyle: {
            borderBottomColor: 'red',
            // backgroundColor: 'red',
          },
        }}
        name="Contacts"
        component={Contacts}
      />
    </Stack.Navigator>
  );
};

const ProfileStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerTitleStyle: {
            fontSize: 20,
            fontFamily: 'Quicksand-Bold',
          },
          headerStyle: {
            borderBottomColor: 'red',
            // backgroundColor: 'red',
          },
        }}
        name="Profile"
        component={Profile}
      />
    </Stack.Navigator>
  );
};

const MapsStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerTitleStyle: {
            fontSize: 20,
            fontFamily: 'Quicksand-Bold',
          },
          headerStyle: {
            borderBottomColor: 'red',
            // backgroundColor: 'red',
          },
        }}
        name="Maps"
        component={Maps}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            <Tab.Navigator
              tabBarOptions={{
                labelStyle: {
                  fontSize: 12,
                  fontFamily: 'Quicksand-Bold',
                  // marginBottom: 15,
                  paddingBottom: 15,
                },
                style: {
                  height: 80,
                },
                tabStyle: {
                  marginTop: 15,
                },
              }}>
              <Tab.Screen
                options={{
                  tabBarIcon: ({color, size}) => (
                    <FontAwesome name="comment" color={color} size={30} />
                  ),
                }}
                name="Chats"
                component={ChatsStackScreen}
              />
              <Tab.Screen
                options={{
                  tabBarIcon: ({color, size}) => (
                    <FontAwesome name="address-book" color={color} size={30} />
                  ),
                }}
                name="Contacts"
                component={ContactsStackScreen}
              />
              <Tab.Screen
                options={{
                  tabBarIcon: ({color, size}) => (
                    <FontAwesome name="compass" color={color} size={30} />
                  ),
                }}
                name="Maps"
                component={MapsStackScreen}
              />
              <Tab.Screen
                options={{
                  tabBarIcon: ({color, size}) => (
                    <FontAwesome name="user" color={color} size={30} />
                  ),
                }}
                name="Profile"
                component={ProfileStackScreen}
              />
            </Tab.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
