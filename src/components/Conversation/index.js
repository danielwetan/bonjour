import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';
import BubbleChat from './BubbleChat';

const Conversation = (props) => {
  const [messages, setMessages] = useState([]);
  const [sender, setSender] = useState('');
  const [receiver, setReceiver] = useState('');

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

  return(
    <>
      <View>
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
