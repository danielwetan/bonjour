/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import styles from './styles';
import {Image, Button, Icon} from 'react-native-elements';

const Message = (props) => {
  const img = 'http://192.168.43.186:3000/img/' + props.profile_img;
  return (
    <>
      <View
        style={{
          marginTop: 5,
          // marginBottom: 5,
          marginLeft: 20,
          marginRight: 20,
          paddingRight: 80,
        }}>
        <TouchableHighlight
          underlayColor={'lightgray'}
          activeOpacity={1}
          onPress={() => props.nav.navigate("Conversation", {sender_id:props.sender_id, receiver_id:props.receiver_id, name:props.sender_name, image: img})}>
          <View
            style={{
              flexDirection: 'row',
              // paddingTop: 5,
              // paddingBottom: 5,
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={{uri: img}}
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
                marginRight: 80,
                marginLeft: 20,
                paddingTop: 8,
                paddingBottom: 18,
                borderBottomColor: 'lightgray',
                borderBottomWidth: 1,
                width: '100%'
              }}>

              <View style={{flexDirection: 'row'}}>
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
                  fontSize: 12,
                  fontFamily: 'Quicksand-Medium',
                  color: 'gray',
                  marginLeft: 'auto'
                }}>
                Yesterday
              </Text>
              </View>

              <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  paddingTop: 3,
                  fontSize: 15,
                  fontFamily: 'Quicksand-Medium',
                  color: '#373D3F',
                }}>
                {props.message}
              </Text>

              <Text style={{marginLeft: 'auto'}}>
              <Icon
                name='chevron-right'
                type='font-awesome'
                color='lightgray'
              />
              </Text>
              </View>

            </View>


          </View>
        </TouchableHighlight>
      </View>
    </>
  );
};

export default Message;
