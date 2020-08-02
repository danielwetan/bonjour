/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import Search from '../Public/Search';
import Message from './Message';
import MessageList from './MessageList';
const Chats = (props) => {
  return (
    <>
      <Search />
      <MessageList nav={props.nav}/>
      {console.log(props.nav)}
    </>
  );
};

export default Chats;
