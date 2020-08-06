/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Main from '../components/Maps/Main';
const Maps = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
        <Main />
      </SafeAreaView>
    </>
  );
};

export default Maps;
