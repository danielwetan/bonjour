import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Platform, PermissionsAndroid} from 'react-native';
import styles from './styles';
import { Button } from 'react-native-elements';
// import img from '../../assets/images/harry-potter.jpg';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/auth';
import {updateProfile} from '../../redux/actions/user'
import ImagePicker from 'react-native-image-picker';

const Profile = (props) => {
  const [image, setImage] = useState(null);

  const upload = () => {
    const formData = new FormData();
    formData.append('profile_img', {
      uri: image.uri,
      type: image.type,
      name: image.fileName,
    })
    props.updateProfile(props.auth.data.id, formData)
    .catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    if(image) {
      upload();
    }
  }, [image])

  const handleChoosePhoto = async () => {
    const options = {
      noData: true,
    };
    ImagePicker.showImagePicker(options, (response) => {
      if (response.uri) {
        if (response.fileSize > 1024 * 1024 * 3) {
          Alert.alert(
            'Image size is too large.',
            'The maximum size is 3 MB. Please choose another image.',
          );
        } else {
          setImage(response);
        }
      }
    });
  };

  const logout = () => {
    props.logout();
    props.nav.reset({
      index: 0,
      routes: [
        {
          name: 'Login',
        },
      ],
    });
  };

  const img = 'http://192.168.43.186:3000/img/' + props.auth.data.profile_img;

  return (
    <>
      <View
        style={{
          alignItems: 'center',
          marginTop: 10,
        }}>

        {image ? (
          <TouchableOpacity onPress={() => handleChoosePhoto()}>
            <Image source={{ uri: image.uri }} style={{ width: 300, height: 300 }} />
          </TouchableOpacity>
        ) : (
            <TouchableOpacity onPress={() => handleChoosePhoto()}>
              <Image source={{ uri: img }} style={{ width: 300, height: 300 }} />
            </TouchableOpacity>
          )}

        <Text style={styles.name}>{props.auth.data.name}</Text>
        <Text style={styles.email}>{props.auth.data.about}</Text>
        <Text style={styles.email}>{props.auth.data.email}</Text>
        <Button
          buttonStyle={{ backgroundColor: '#004380', width: 100, marginTop: 10 }}
          titleStyle={{ fontFamily: 'Quicksand-Bold', fontSize: 16 }}
          title="Logout"
          onPress={() => logout()}
        />
      </View>
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = { logout, updateProfile };

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
