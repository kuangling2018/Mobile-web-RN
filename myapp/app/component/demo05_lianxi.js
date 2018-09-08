import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class demo05Component extends Component {
    list = [1, 2, 3, 4, 5];
    render() {
        return (
            <View>
                {
                    this.list.map((value, index) => {
                        return (
                           <Text key={index}>{value}</Text> 
                        )   
                    })
                }
            </View>
        )
    }
}