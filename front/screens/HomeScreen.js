import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.conatainer}>
      <Text>HomeScreen</Text>
      <Button title='Login Screen' onPress={()=>navigation.navigate('Login')}/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    conatainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    }
})