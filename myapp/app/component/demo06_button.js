import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Demo06Component extends Component {
    constructor(){
        super();
        this.state={
            num:1,
        }
    }
    handlePress = () => {
        console.log('按钮点击了');
        let nowNum=this.state.num;
        nowNum++;
        this.setState({num:nowNum});
    }
    render() {
        return (
            <View>
                <Text>{this.state.num}</Text>
                <Button title='点击' onPress={this.handlePress}></Button>
            </View>
        )
    }
}