import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class Demo04Component extends Component {
    render() {
        return (
            <View>
                <Image source={require("../imgs/1.jpg")} style={{ width: 50, height: 40 }}></Image>
                <Image style={{ width: 50, height: 50 }} source={{ uri: "http://176.226.102.3:80/ajia_code/img/404/404_img1.png" }}></Image>
            </View>
        )
    }
}
