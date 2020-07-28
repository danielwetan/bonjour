/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView} from 'react-native';

import Main from '../components/Register';
const Register = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
        <Main nav={navigation} />
      </SafeAreaView>
    </>
  );
};

export default Register;
