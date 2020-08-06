import React from 'react';
import {View, Text, TextInput, ScrollView} from 'react-native';
import axios from 'axios';
import styles from './styles';
import io from 'socket.io-client';

class Conversation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      sender: '',
      receiver: '',
      value: '',
    };
  }

  submitChat() {
    this.socket.emit('chat-message', {data: 'hi from App!'});
  }

  clearMsg() {
    this.setState({
      value: ''
    })
  }

  componentDidMount() {
    this.socket = io('http://192.168.43.186:3000');
    this.socket.on('message', (msg) => {
      console.log('here: ', msg);
      this.setState({
        messages: [...this.state.messages, msg]
      });
    });
    axios({
      method: 'GET',
      url: `http://192.168.43.186:3000/msg?sender=${this.props.sender_id}&receiver=${this.props.receiver_id}`
    })
    .then((res) => {
      this.setState(
        {messages: res.data.body}
      )
    })
    .catch((err) => {
      console.log(err)
    });
  }
  componentWillUnmount() {
    this.socket.removeAllListeners();
    this.socket.disconnect();
  }
  render() {
  return(
    <>
      <View style={{flex: 1, backgroundColor: 'white',}}>
        {this.state.messages.map((data) => {
          return (
            <View key={data.id} id={data.id}>
              <Text>{data.message}</Text>
            </View>
          )
        })}
      </View>
    </>
  )
}
}

export default Conversation
