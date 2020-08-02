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

/* Upload image
  formData.append('image', {
  uri: this.state.filePath.uri,
  type: this.state.filePath.type,
  name: this.state.filePath.fileName,
  });
  FLIPPER_VERSION=0.46.0
  headers: {
  'Accept': 'application/json',
  'Content-Type': 'multipart/form-data',
  },
*/
