/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Main from '../components/Conversation';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';

const Chats = ({navigation, route}) => {
  const {sender_id, receiver_id, name} = route.params
  return (
    <>
      <Main nav={navigation} sender_id={sender_id} receiver_id={receiver_id} sender_name={name}/>
    </>
  );
};

export default Chats;
