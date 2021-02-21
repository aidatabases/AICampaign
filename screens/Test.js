import React from 'react'
import { Button, StyleSheet, View, ScrollView } from 'react-native'
import Card from '../components/Card'
import DropCard from '../components/DropCard'

const Test = ({navigation}) => {
    return (
        <ScrollView>
        <View style={styles.container}>
       
            <DropCard
            text="Hey!"
            />
            <Card/>
            <Card/>
            <Card/>
            <Button onPress={() => navigation.navigate("home")} title="Go to Home"/>
            
        </View>
        </ScrollView>
        
    )
}

export default Test

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    }
});
