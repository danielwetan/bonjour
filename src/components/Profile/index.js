/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import styles from './styles';

import ProfileInfo from './ProfileInfo';

const Profile = (props) => {
  return (
    <>
      <View style={[styles.container, styles.profile]}>
        <ProfileInfo nav={props.nav} />
      </View>
    </>
  );
};

export default Profile;
