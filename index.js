import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Router from './src/router';

class index extends Component {
    render() {
        return (
          <View style={{ flex: 1 }}>
              <Router />
          </View>
        );
    }
}

AppRegistry.registerComponent('project', () => index);
