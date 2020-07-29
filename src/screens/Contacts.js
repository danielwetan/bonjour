/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Main from '../components/Contacts';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';

const Contacts = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Main nav={navigation} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Contacts;
