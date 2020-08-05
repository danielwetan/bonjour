import React from 'react';
import {View, Text, Button} from 'react-native';
import {Image} from 'react-native-elements';
const Splash = (props) => {

  const login = () => {
    props.nav.reset({
      index: 0,
      routes: [
        {
          name: 'Login',
        }
      ]
    })
  }

  const register = () => {
    props.nav.reset({
      index: 0,
      routes: [
        {
          name: 'Register',
        }
      ]
    })
  }

  return(
    <>
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Button title="Login" onPress={login}/>
        <Button title="Register" onPress={register}/>
      </View>
    </>
  )
}

export default Splash;
