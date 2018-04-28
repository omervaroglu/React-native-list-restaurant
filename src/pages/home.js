import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import axios from 'axios';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import Card from '../component/Card';


class Home extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
        };
        }

    componentWillMount() {
        axios.get('https://ders1-b7d60.firebaseio.com/.json')
        .then(response => this.setState({ data: response.data }));
    }

    renderData() {
      return this.state.data.map((items, Id) =>
         <Card key={Id} data={items} />
      );
    }

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
              >

                    {this.state.data.length > 0 && this.state.data.map((marker, id) => (
            <Marker
                coordinate={{
                    latitude: Number(marker.longitude),
                    longitude: Number(marker.latitude)
                }}
                key={id}
                title={marker.restoran}
                description={marker.restoran}
            >
                   <Callout style={styles.markerView} >
                        <View>
                            <Text style={{ fontSize: 20 }}>{marker.restoran}</Text>
                        </View>
                    </Callout>
            </Marker>
            ))}
              </MapView>

              <View style={{ height: 1, backgroundColor: '#ddd', marginTop: 10 }} />

              <ScrollView >
                    {this.renderData()}
              </ScrollView>

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
    markerView: {
        width: 150,
        height: 75,
      },
      });

export default Home;
