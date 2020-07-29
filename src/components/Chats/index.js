/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Button} from 'react-native';

const Chats = (props) => {
  return (
    <>
      <View>
        <Text>Home</Text>
        <Button
          title="Go to Login"
          onPress={() => props.nav.navigate('Login')}
        />
      </View>
    </>
  );
};

export default Chats;
