/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Main from '../components/Splash';
import {SafeAreaView} from 'react-native';

const Login = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
        <Main nav={navigation} />
      </SafeAreaView>
    </>
  );
};

export default Login;
