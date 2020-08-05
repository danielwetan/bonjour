/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {Image, Button} from 'react-native-elements';
// import img from '../../assets/images/harry-potter.jpg';

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
          style={{ width: 200, height: 200, borderRadius: 100,}}
        />
        <Text style={styles.email}>{props.name}</Text>
        <Text style={styles.email}>{props.about}</Text>
        <Text style={styles.email}>{props.email}</Text>
</View>
      </View>
      // </View>
    // </>
  );
};

// export default connect(mapStateToProps, mapDispatchToProps)(Profile);
export default Profile;
