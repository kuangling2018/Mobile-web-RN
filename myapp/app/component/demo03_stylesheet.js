import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Demo03Component extends Component {
    render() {
        return (
            <View>
                <Text style={{ color: 'red' }}>hello</Text>
                <Text style={styles.text}>框里</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        color: 'red',
    }
})