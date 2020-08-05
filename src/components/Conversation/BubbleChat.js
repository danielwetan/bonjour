import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const BubbleChat = (props) => {
  return(
    <>
      <View>
      {props.sender==2 ? <Text style={styles.msg1}>{props.data}</Text> : <Text style={styles.msg2}>{props.data}</Text>}
        {console.log(props.data)}
      </View>
    </>
  )
}


export default BubbleChat;

// {props.sender==2 ? console.log("Kanan (2)") : console.log("Kiri")}