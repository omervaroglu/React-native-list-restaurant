import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';


const Card = (props) => {
    const sendData = () => {
        Actions.Menu({ data: props.data });
      };
    return (
        <View style={styles.containerStyle} >
            <TouchableOpacity
                onPress={() => sendData()}
                style={styles.subContainerStyle}
            >
                <View>
                    <Image source={{ uri: props.data.imgloc }} style={{ width: 75, height: 75 }} />
                </View>

                <View >
                    <Text style={{ fontSize: 26 }}>    {props.data.restoran}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        flexDirection: 'column',
      },
      subContainerStyle: {
        borderBottomWidth: 1,
        borderRadius: 15,
        padding: 10,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',
        alignContent: 'space-between'
      },
};

export default Card;
