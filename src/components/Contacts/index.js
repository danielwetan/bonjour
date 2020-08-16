/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import Search from '../Public/Search';
import Contact from './Contact';
import ContactList from './ContactList';
const Contacts = (props) => {
  return (
    <>
      <Search />
      <ContactList nav={props.nav}/>
    </>
  );
};

export default Contacts;
