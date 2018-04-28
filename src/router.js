import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Home from './pages/home';

const RouterComponent = () => {
    return (
        <Router>
        <Scene
            key="first"
            navigationBarStyle={{ backgroundColor: '#f44336' }}
            titleStyle={{ fontSize: 25, color: '#fff' }}
            leftButtonIconStyle={{ tintColor: '#fff' }}
        >
          <Scene
          component={Home}
          key='Home'
          title='Restoran Bul'
          initial
          />
        </Scene>
        </Router>
    );
};

export default RouterComponent;
