import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


class Menu extends Component {
    renderMenu() {
        return this.props.data.menu.map((items, Id) =>
          <Text key={Id} data={items} style={{ fontSize: 25, paddingTop: 20 }} > {items} </Text>
        );
    }
    renderFiyat() {
        return this.props.data.fiyat.map((items, Id) =>
          <Text key={Id} data={items} style={{ fontSize: 25, paddingTop: 20 }} > {items}  TL </Text>
        );
    }


    render() {
   return (
       <View style={styles.containerStyle} >
              <View style={styles.subContainerStyle} >
                <View >
                 <Text style={{ fontSize: 25, marginBottom: 20, color: 'black' }}> Yemekler </Text>
                 {this.renderMenu()}
                </View>

                <View>
                <Text style={{ fontSize: 25, marginBottom: 20, color: 'black' }}> Fiyat </Text>
                 {this.renderFiyat()}
                </View>
              </View>
       </View>
   );
 }
}

const styles = StyleSheet.create({
    containerStyle: {
        marginTop: 70,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
      subContainerStyle: {
        margin: 10,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        flexDirection: 'row',
        position: 'relative',
        alignContent: 'center',
        height: '100%',
    },
});

export default Menu;
