import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'


const SearchBox = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.textView} 
      keyboardType='default'
      autoCapitalize='none'
      autoCorrect={false}
   
      placeholder='Search'/>
    </View>
  )
}

export default SearchBox

const styles = StyleSheet.create({
    textView: {
        width: '90%',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 10,
        padding: 10,
        fontSize: 18,
        color: '#000',

  },
  container: {
    alignItems:'center'
  }
})