import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'


const LoginView = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
        <Image resizeMode='cover' style={styles.imageView} source={require('../assets/icon/icon.png')} />
        <Text style={styles.textView}>Live News</Text>
      </View>
      <View style={styles.middleView}>
        <TextInput style={styles.textInputView} placeholder='Email'/>
        <TextInput style={styles.textInputView} placeholder='Password'/>
        <TouchableOpacity>
          <Text style={styles.buttonView}>Sign Up</Text>
        </TouchableOpacity>
        
        <View style={styles.bottomView}>
          <Text>Dont have an Account?</Text>
          <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
              <Text style={styles.bottomButton}>Resister Here</Text>
            </TouchableOpacity>
        </View>
      </View>
      

      
    </SafeAreaView>
  )
}

export default LoginView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#eae4f8',
    justifyContent:'center'
    
    
  },
  imageView: {
    width: 190,
    height: 170,

  },
  textView: {
    color: '#783fb8',
    fontSize: 24,
    fontWeight: '900',
    elevation: 100,
    shadowColor: 'pink',
    shadowOpacity: 0.7,
    shadowRadius: 5,
    top:-30
  },
  topView: {
    
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputView: {
    width:320,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  buttonView: {
    backgroundColor: '#783fb8',
    width: 280,
    textAlign: 'center',
    color: '#fff',
    padding: 10,
    borderRadius: 10,
    fontWeight: '900',
    marginTop:10
    
  },
  middleView: {
    
    alignItems: 'center',
    height: 300,
   
    justifyContent: 'flex-start',
    gap:20
   
    
  },
  bottomView: {
    alignItems: 'center',
    justifyContent: 'space-between',
    gap:4,
    flexDirection: 'row',
  },
  bottomButton: {
    color: '#783fb8',
    fontWeight: '800',

    
  }
})