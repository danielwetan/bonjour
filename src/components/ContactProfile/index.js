/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {Image, Button} from 'react-native-elements';

const Profile = (props) => {
  const img = 'http://192.168.43.186:3000/img/' + props.profile_img;
  return (
      <View style={[styles.container, styles.profile]}>
      <View style={{
        alignItems: 'center',
        marginTop: 10,
        justifyContent: 'center',
      }}>
        <Image
          source={{uri: img}}
          style={{ width: 150, height: 150, borderRadius: 100,}}
        />
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.about}>{props.about}</Text>
        <Text style={styles.email}>{props.email}</Text>
        <View style={styles.button}>
        </View>
      </View>
      </View>
  );
};

export default Profile;
