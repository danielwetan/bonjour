import React from 'react';
import Chats from '../../screens/Chats';
import Login from '../../screens/Login';
import Register from '../../screens/Register';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator>
      {/* <Tab.Screen name="Chats" component={Chats} /> */}
      <Tab.Screen name="Register" component={Register} />
      <Tab.Screen name="Login" component={Login} />
    </Tab.Navigator>
  );
};

export default BottomNav;
