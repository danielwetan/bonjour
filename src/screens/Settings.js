/* eslint-disable react-native/no-inline-styles */
import React from 'react';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Main from '../components/Settings';
import {SafeAreaView} from 'react-native';

const Settings = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
        <Main nav={navigation} />
      </SafeAreaView>
    </>
  );
};

export default Settings;
