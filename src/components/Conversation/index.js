import React, {useState, useCallback, useEffect} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import io from 'socket.io-client';
import axios from 'axios';

const Conversation = (props) => {
  const [messages, setMessages] = useState([]);
  const [msg, setMsg] = useState('');
  const [senderId, setSenderId] = useState('');

  const [socket, setSocket] = useState('');

  const submitChat = () => {
    socket.emit('chat-message', {data: messages});
    // change messages above to only new submit message
  }

  const getMsg = () => {
    axios({
      method: 'GET',
      url: `http://192.168.43.186:3000/msg?sender=${props.sender_id}&receiver=2`,
    })
    .then((res) => {
      setMsg(res.data.body);
    })
    .catch((err) => {
      console.log(err.response);
    })
  }

  useEffect(() => {
    setSenderId(props.sender_id)
    getMsg()
  }, [])

  useEffect(() => {
    setSocket(io('http://192.168.43.186:3000/'));
    console.log("#######")
    console.log(props.sender_id)
    console.log(msg);
    setMessages([
        {
          _id: 1,
          text: 'Hello developer',
          // text: `${msg[0].message}`,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
          },
        },
      ]);
  }, [msg]);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <GiftedChat
      messages={messages}
      // onSend={(messages) => onSend(messages)}
      onSend={(messages) => {
        submitChat(messages)
        onSend(messages)
      }}
      user={{
        _id: 1,
      }}
      renderAvatar={() => null}
    />
  );
};

export default Conversation;
