import React, {useState} from 'react';
import {View, Text} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button} from 'react-native-elements';
import styles from './styles';

import { connect } from 'react-redux';
import { register } from '../../redux/actions/auth';

import Modal from 'react-native-modal';

const Register = props => {
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [role, setRole] = useState('2');

  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible(false)
  };

  const userRegistration = () => {
    const data = {
      username: username,
      full_name: fullName,
      email: email,
      password: password,
      role: '2'
    }
    props.dispatch(register(data))
      .then(() => {
        setIsModalVisible(true)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Username</Text>
        <Input onChangeText={text => setUsername(text)} placeholder="Username"           inputStyle={{
            fontFamily: 'Quicksand-Bold',
          }} />

        <Text style={styles.title}>Full Name</Text>
        <Input onChangeText={text => setFullName(text)} placeholder="John Doe"           inputStyle={{
            fontFamily: 'Quicksand-Bold',
          }} />

        <Text style={styles.title}>Email</Text>
        <Input onChangeText={text => setEmail(text)} placeholder="email@example.com"           inputStyle={{
            fontFamily: 'Quicksand-Bold',
          }} />

        <Text style={styles.title}>Password</Text>
        <Input onChangeText={text => setPassword(text)} placeholder="Password" secureTextEntry={true}           inputStyle={{
            fontFamily: 'Quicksand-Bold',
          }} />
        <Button onPress={userRegistration} title="Register" titleStyle={{fontFamily: 'Quicksand-Bold'}} />

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
            }}>Register Success!.</Text>
            <Text style={{
              fontFamily: 'Quicksand-Bold',
              fontSize: 18,
              color: 'blue',
            }} onPress={() => props.nav.navigate('Login')}>Login</Text>
            </View>
            {/* <Text
            style={{
              fontFamily: 'Quicksand-Bold',
              fontSize: 18,
            }}
            >Login Success!</Text> */}
          </View>
        </Modal>
      </View>
    </>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Register)