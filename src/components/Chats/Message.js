/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import styles from './styles';
import {Image, Button} from 'react-native-elements';
// import img from '../../assets/images/2.jpg';

const Message = (props) => {
  const img = 'http://192.168.43.186:3000/img/' + props.profile_img;
  return (
    <>
      <View
        style={{
          marginTop: 10,
          marginLeft: 20,
          marginRight: 20,
        }}>
        <TouchableHighlight
          underlayColor={'lightgray'}
          activeOpacity={1}
          // onPress={() => props.nav.naddvigate("Conversation", {name: props.sender_name, image: img, sender_id: props.sender_id})}>
          onPress={() => props.nav.navigate("Conversation", {sender_id:props.sender_id, receiver_id:props.receiver_id, name:props.sender_name, image: img})}>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 5,
              paddingBottom: 5,
              // borderTopColor: 'lightgray',
              // borderTopWidth: 1,
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={{uri: img}}
                // source={img}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 50,
                  overflow: 'hidden',
                }}
              />
            </View>
            <View
              style={{
                marginRight: 100,
                // marginTop: 10,
                marginLeft: 20,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: 'Quicksand-Bold',
                  color: '#373D3F',
                }}>
                {props.sender_name}
              </Text>
              <Text
                style={{
                  paddingTop: 3,
                  fontSize: 15,
                  fontFamily: 'Quicksand-Medium',
                  color: '#373D3F',
                }}>
                {props.message}
              </Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    </>
  );
};

export default Message;
