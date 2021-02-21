import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Hello World. This is Home</Text>
            <Button onPress={() => navigation.navigate("test")} title="Go to Test"/>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        margin: 10,
    }
})
