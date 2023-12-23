import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const LoginView = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage,setErrorMessage] = useState('')
 
  const fetchData = async() => {
    try {
      let url = `http://192.168.129.43:3000/register/${email}`
      let response = await fetch(url)
      let result = await response.json()
      if(result.password === password){
        navigation.navigate('Home')
      } else {
        setErrorMessage('Invalid Credentials')
      }
      
    } catch (error) {
      console.error('Fetch Error',error);
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
        <Image resizeMode='cover' style={styles.imageView} source={require('../assets/icon/icon.png')} />
        <Text style={styles.textView}>Live News</Text>
      </View>
      <View style={styles.middleView}>
        <TextInput onChangeText={(text) => setEmail(text)} style={styles.textInputView} placeholder='Email' />
        <TextInput secureTextEntry={true} onChangeText={(text) => setPassword(text)} style={styles.textInputView} placeholder='Password' />
        {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
        <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={()=>fetchData()}>
          <Text style={styles.buttonView}>Sign In</Text>
        </TouchableOpacity>
        
        
        <View style={styles.bottomView}>
          <Text>Dont have an Account?</Text>
          <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
              <Text style={styles.bottomButton}>Resister Here</Text>
            </TouchableOpacity>
        </View>
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
    

    height: 300,
   
    justifyContent: 'flex-start',
    gap:15
   
    
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

    
  },
  buttonContainer: {
    alignItems: 'center',

    height: 100,
    justifyContent: 'space-between',
  },
  errorMessage: {
    color: 'red',
    fontWeight: '700',
    top: -11,
    left:3

  }
})