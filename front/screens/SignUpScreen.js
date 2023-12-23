import React, { useEffect, useRef, useState } from 'react';
import { Image, Modal, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const SignUpScreen = ({navigation}) => {
  const [name, setName] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setnameError] = useState(false)
  const [emailError, setemailError] = useState(false)
  const [passwordError, setpasswordError] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [dataStored,setDataStored] =useState(false)
  
  const errorData = () => {
    setnameError(false)
    setemailError(false)
    setpasswordError(false)
  }
  const clearInput = () => {
    setEmail('')
    setName('')
    setPassword('')

  }
  const saveDataOnClick = async () => {
    if(!name) {
      setnameError(true);
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailPattern.test(email)) { 
      setemailError(true);
    } else {
      setemailError(false)
    }

    if (!password || password.length<8) {
      setpasswordError(true);
    } else {
      setpasswordError(false)
    }
    
    
    const url = 'http://192.168.129.43:3000/register';
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
      
      setDataStored(postResponse)
      if(postResponse.status === 'success') {
        navigation.navigate('Login')
      }
    } catch (error) {
      console.error('Fetch Error', error.message);
    }
  };
  const closeModal = () => {
    
    setShowModal(false)
    errorData()
    clearInput()
    
  }
  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
        <Image resizeMode='cover' style={styles.imageView} source={require('../assets/icon/icon.png')} />
        <Text style={styles.textView}>Live News</Text>
      </View>
      <View style={styles.middleView}>
        <TextInput value={name}  onChangeText={(text) =>[setName(text)]} style={styles.textInputView} placeholder='Full Name' />
        {nameError ? <Text style={[styles.errorMessage,{left:-102}]}>Name is required</Text> : null}
        <TextInput value={email} onChange={()=>setemailError(false)} onChangeText={(text) => [setEmail(text)]} style={styles.textInputView} placeholder='Email' />
        {emailError ? <Text style={[styles.errorMessage,{left:-77}]}>Please Enter a Valid email</Text> : null}
        <TextInput value={password} onChange={()=>setpasswordError(false)} secureTextEntry={true} onChangeText={(text) => [[setPassword(text)]]} style={styles.textInputView} placeholder='Password' />
        {passwordError ? <Text style={[styles.errorMessage,{left:-60}]}>Please enter a 8 digit password</Text> : null}
        {/* Added secureTextEntry for password input */}
        <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
          <Text style={styles.buttonView}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPressOut={()=>setShowModal(true)} onPress={saveDataOnClick}>
          <Text style={styles.buttonView}>Sign Up</Text>
        </TouchableOpacity>
        </View>
        
        
        
      </View>
      <Modal transparent={true} animationType='fade' visible={showModal} onRequestClose={()=>setShowModal(false)} >
        <View style={styles.Container}>
          <View style={styles.modalContainer}>
            {dataStored?<Text style={styles.modaltext}>Sent Data</Text>:<Text style={styles.modaltext}>No Data</Text>}
            <TouchableOpacity  onPress={()=>closeModal()}>
              <Text style={styles.modalButton}>Close</Text>
            </TouchableOpacity>
            
          </View>
        </View>
      </Modal>
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
  buttonContainer: {
    flexDirection: 'row', 
  
    width: 300,
  
    justifyContent: 'center',
    gap: 40,
    marginTop:14
  },
  buttonView: {
    backgroundColor: '#783fb8',
    width: 130,
    textAlign: 'center',
    color: '#fff',
    padding: 10,
    borderRadius: 10,
    fontWeight: '900',
    marginTop:10
    
  },
  middleView: {
    alignItems:'center',
    height: 300,
   
    justifyContent: 'flex-start',
    gap:10
   
    
  },
  errorMessage: {
    color: 'red',
    fontWeight: '700',
    top: -10,
    fontSize:13
    
    
  },
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  modalContainer: {
    backgroundColor: '#ead9f8',
    height: 140,
    width: 180,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 13,
    
  },
  modalButton: {
    backgroundColor: '#783fb8',
    color: '#fff',
    fontWeight: '800',
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 10,
  },
  modaltext: {
    fontSize: 18,
    fontWeight:'700',
  }
})