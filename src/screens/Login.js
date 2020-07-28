import React from 'react';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Main from '../components/Login';
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
