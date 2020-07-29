/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Button} from 'react-native';
import BottomNav from '../../components/Navigation/BottomNav';

const Chats = (props) => {
  return (
    <>
      <View>
        <Text>Home</Text>
        <Button
          title="Go to Login"
          onPress={() => props.nav.navigate('Login')}
        />
        {/* <BottomNav /> */}
      </View>
    </>
  );
};

export default Chats;
