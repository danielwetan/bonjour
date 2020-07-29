/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
// import {View, Text} from 'react-native';
import axios from 'axios';
import Message from './Message';

const MessageList = () => {
  const [data, setData] = useState([]);

  const getMessages = () => {
    axios({
      method: 'GET',
      url: 'http://192.168.43.186:3000/msg/2',
    })
      .then((res) => {
        setData(res.data.body);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <>
      {data.map((singleData) => {
        return (
          <Message
            key={singleData.id}
            id={singleData.id}
            receiver_id={singleData.receiver_id}
            sender_name={singleData.sender_name}
            profile_img={singleData.profile_img}
            message={singleData.message}
          />
        );
      })}
    </>
  );
};

export default MessageList;