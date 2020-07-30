/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';

const Settings = () => {
  return (
    <>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text
          style={{
            marginTop: 300,
            fontFamily: 'Quicksand-Medium',
            fontSize: 20,
          }}>
          Settings
        </Text>
      </View>
    </>
  );
};

export default Settings;
