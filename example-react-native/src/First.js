import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class First extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>First View</Text>
                <Text>Loaded by App</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        fontWeight: 'bold',
        fontSize: 30,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
