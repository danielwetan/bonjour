import React, {useState, useEffect} from 'react';
import {View, Text, TextInput} from 'react-native';
import axios from 'axios';
import BubbleChat from './BubbleChat';
import styles from './styles';

const Conversation = (props) => {
  const [messages, setMessages] = useState([]);
  const [sender, setSender] = useState('');
  const [receiver, setReceiver] = useState('');

  const [value, onChangeText] = useState('');

  const getMessages = () => {
    axios({
      method: 'GET',
      url: `http://192.168.43.186:3000/msg?sender=${sender}&receiver=${receiver}`
    })
    .then((res) => {
      setMessages(res.data.body);
    })
    .catch((err) => {
      console.log(err.response);
    })
  }


  useEffect(() => {
    setSender(props.sender_id);
    setReceiver(props.receiver_id)
  }, [sender, receiver])

  useEffect(() => {
    getMessages();
  }, [sender, receiver])

  const clearMsg = () => {
    onChangeText('')
  }

  return(
    <>
      <View style={{flex: 1, backgroundColor: 'white',}}>
        {messages.map((msg) => {
          return(
            <BubbleChat
              key={msg.id}
              id={msg.id}
              data={msg.message}
              sender={msg.sender_id}
              receiver={msg.receiver_id}
            />
          )
        })}
        <View style={styles.bottom}>
          <TextInput
            style={styles.input}
            onChangeText={text => onChangeText(text)}
            value={value}
            onSubmitEditing={() => {
              console.log(value)
              clearMsg()
            }}
          />
        </View>
      </View>
    </>
  )
}

export default Conversation

// sender_id={singleData.sender_id}
// receiver_id={singleData.receiver_id}
// sender_name={singleData.sender_name}
// profile_img={singleData.profile_img}
// message={singleData.message}
// nav={props.nav}
