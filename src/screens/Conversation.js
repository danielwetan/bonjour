/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Main from '../components/Conversation';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';

const Chats = ({navigation}) => {
  return (
    <>
      {/* <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}> */}
      <Main nav={navigation} />
      {/* </ScrollView>
      </SafeAreaView> */}
    </>
  );
};

export default Chats;
