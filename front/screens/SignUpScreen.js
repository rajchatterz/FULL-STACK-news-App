import React, { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const SignUpScreen = () => {
  const [name, setName] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const saveDataOnClick = async () => {
    const url = 'http://192.168.206.43:3000/register';
    try {
      let postResponse = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }), // Fixed here: Use correct state values
      });
      if (!postResponse.ok) {
        throw new Error('Something went wrong');
      }
      postResponse = await postResponse.json();
    } catch (error) {
      console.error('Fetch Error', error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
        <Image resizeMode='cover' style={styles.imageView} source={require('../assets/icon/icon.png')} />
        <Text style={styles.textView}>Live News</Text>
      </View>
      <View style={styles.middleView}>
        <TextInput onChangeText={(text) => setName(text)} style={styles.textInputView} placeholder='Full Name' />
        <TextInput onChangeText={(text) => setEmail(text)} style={styles.textInputView} placeholder='Email' />
        <TextInput onChangeText={(text) => setPassword(text)} style={styles.textInputView} placeholder='Password' secureTextEntry={true} />
        {/* Added secureTextEntry for password input */}
        <TouchableOpacity onPress={saveDataOnClick}>
          <Text style={styles.buttonView}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;


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
})