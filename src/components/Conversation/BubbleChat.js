import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const BubbleChat = (props) => {
  return(
    <>
      <View>
        <Text>{props.data}</Text>
      </View>
    </>
  )
}


export default BubbleChat;

// {props.sender==2 ? console.log("Kanan (2)") : console.log("Kiri")}

        // {props.sender==2 ? <Text style={styles.msg1}>{props.data}</Text> : <Text style={styles.msg2}>{props.data}</Text>}
