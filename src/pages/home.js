import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';


class Home extends Component {

    render() {
        return (
          <View style={{ flex: 1, marginTop: 50, }}>

              <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.container}
                    initialRegion={{
                        latitude: 41.0133722,
                        longitude: 28.9738776,
                        latitudeDelta: 0.0122,
                        longitudeDelta: 0.0121,
                    }}
              />

          </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        height: '40%',
        width: '100%',
        backgroundColor: 'black',
        borderTopWidth: 1,
      },
      });


export default Home;
