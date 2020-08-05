/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Main from '../components/ContactProfile';
const Profile = ({navigation, route}) => {
  const {name, email, about, profile_img} = route.params
  return (
    <>
      <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
        <Main nav={navigation} name={name} email={email} about={about} profile_img={profile_img}/>
      </SafeAreaView>
    </>
  );
};

export default Profile;
