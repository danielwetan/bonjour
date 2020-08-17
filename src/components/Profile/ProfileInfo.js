import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Platform, PermissionsAndroid} from 'react-native';
import styles from './styles';
import { Button, Icon } from 'react-native-elements';
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
          marginTop: 10,
        }}>

        <View style={{
          alignItems: 'center',
        }}>
        {image ? (
          <TouchableOpacity onPress={() => handleChoosePhoto()}>
            <Image source={{ uri: image.uri }} style={{ width: 200, height: 200 }} />
          </TouchableOpacity>
        ) : (
            <TouchableOpacity onPress={() => handleChoosePhoto()}>
              <Image source={{ uri: img }} style={{ width: 200, height: 200 }} />
            </TouchableOpacity>
          )}
        </View>

        <View style={{flexDirection: 'row'}}>
          <Icon
            name='user'
            type='font-awesome'
            color='gray'
            style={{marginTop: 32}}
          />
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.tag}>Name</Text>
            <Text style={styles.name}>Daniel Saputra</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Icon
            name='info-circle'
            type='font-awesome'
            color='gray'
            style={{marginTop: 32}}
          />
          <View style={{flexDirection: 'column'}}>
          <Text style={styles.tag}>About</Text>
          <Text style={styles.about}>Je parle français</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Icon
            name='envelope'
            type='font-awesome'
            color='gray'
            style={{marginTop: 32}}
          />
          <View style={{flexDirection: 'column'}}>
          <Text style={styles.tag}>Email</Text>
          <Text style={styles.email}>{props.auth.data.email}</Text>
          </View>
        </View>




      </View>
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = { logout, updateProfile };

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

// Logout button
// <Button
//   buttonStyle={{ backgroundColor: '#004380', width: 100, marginTop: 10 }}
//   titleStyle={{ fontFamily: 'Quicksand-Bold', fontSize: 16 }}
//   title="Logout"
//   onPress={() => logout()}
// />

//<Text style={styles.about}>{props.auth.data.about}</Text>
