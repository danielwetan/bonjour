import React, {useState} from 'react';
import {View, Text} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button} from 'react-native-elements';
import styles from './styles';

import {connect} from 'react-redux';
import {login} from '../../redux/actions/auth';

import Modal from 'react-native-modal';


const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible(false)
  };

  const userLogin = () => {
    const data = {
      username: username,
      password: password,
    };
    props
      .dispatch(login(data))
      // .then(() => (console.log(props.auth.isError)))
      .then(() => {
        setIsModalVisible(true)
        // console.log('Login success!');
        // props.nav.navigate('Home');
      })
      .catch((err) => {
        console.log('Username or password is wrong. Message:', err);
      });
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Username</Text>
        <Input
          onChangeText={(text) => setUsername(text)}
          placeholder="Username"
          inputStyle={{
            fontFamily: 'Quicksand-Bold',
          }}
        />

        <Text style={styles.title}>Password</Text>
        <Input
          onChangeText={(text) => setPassword(text)}
          placeholder="Password"
          secureTextEntry={true}
          inputStyle={{
            fontFamily: 'Quicksand-Bold',
          }}
        />
        <Button onPress={() => userLogin()} title="Login" titleStyle={{fontFamily: 'Quicksand-Bold'}} />
        <Modal isVisible={isModalVisible}>
          <View style={{ 
            backgroundColor: 'white', 
            height: 80, 
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            }}>
              <View style={{
                flexDirection: 'row',
              }}>
            <Text style={{
              fontFamily: 'Quicksand-Bold',
              fontSize: 18,
              marginRight: 5,
            }}>Login Success!</Text>
            <Text style={{
              fontFamily: 'Quicksand-Bold',
              fontSize: 18,
              color: 'blue',
            }} onPress={() => props.nav.navigate('Home')}>Ok</Text>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Login);
