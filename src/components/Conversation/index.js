import React from 'react';
import {View, Text, TextInput, ScrollView, FlatList, Button} from 'react-native';
import axios from 'axios';
import styles from './styles';
import io from 'socket.io-client';
import {getConversation, postConversation} from '../../redux/actions/conversation';
import {connect} from 'react-redux';

class Conversation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      sender: '',
      receiver: '',
      value: '',
      tmpMsg: '',
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

  postMessage = () => {
    // axios({
    //   method: 'POST',
    //   url: 'http://192.168.43.186:3000/msg',
    //   data: {
    //     sender_id: this.props.receiver_id,
    //     receiver_id: this.props.sender_id,
    //     message: this.state.value
    //   }
    // })
    this.props.dispatch(postConversation(this.props.receiver_id, this.props.sender_id, this.state.value))
    .then(() => {
      console.log('success!')
    })
    .catch((err) => {
      console.log(err.Response)
    })
  }

  componentDidMount() {
    this.socket = io('http://192.168.43.186:3000');
    this.socket.on('message', (msg) => {
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
    // this.props.dispatch(getConversation(this.props.sender_id, this.props.receiver_id))
    // .then(() => {
    //   this.setState(
    //     {messages: this.props.conversation.data}
    //   )
    // })
    // .catch((err) => {
    //   console.log(err)
    // });
  }
  componentWillUnmount() {
    this.socket.removeAllListeners();
    this.socket.disconnect();
  }
  render() {
  return(
    <>
    <View style={{flex: 1, position: 'relative',}}>
      <ScrollView style={{backgroundColor: 'white', width: '100%', height: '100%',}}>
        {this.state.messages.map((data) => {
          return (
            <View key={data.id} data={data.id} >
              {data.sender_id==2 ? <Text key={data.id} id={data.id} style={styles.msg}>{data.message}</Text> : <Text key={data.id} id={data.id} style={styles.msg2}>{data.message}</Text>}
            </View>
          )
        })}
      </ScrollView>
      <View style={{position: 'absolute', width: '100%', bottom: 0, right: 0, left: 0,}}>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({value: text})}
          value={this.state.value}
          onSubmitEditing={() => {
            console.log(this.state.value)
            this.setState({value: ''})
            this.postMessage()
          }}
          placeholder={'Type a message...'}
        />
      </View>
      </View>
    </>
  )
}
}

const mapStateToProps = state => ({
  conversation: state.conversation
})

export default connect(mapStateToProps)(Conversation)
