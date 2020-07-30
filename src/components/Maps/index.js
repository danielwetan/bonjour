import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';

class Maps extends Component {
  render() {
    return (
      <View style={styles.view}>
        <MapView
          style={styles.maps}
          initialRegion={{
            latitude: -6.1783866,
            longitude: 106.82522,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            draggable
            coordinate={{latitude: -6.1777679, longitude: 106.8261212}}
            title="Monumen Nasional"
            description="Tugu terkenal yang dibangun untuk memperingati kemerdekaan Indonesia dari penjajahan Belanda."
          />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  maps: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  view: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default Maps;
