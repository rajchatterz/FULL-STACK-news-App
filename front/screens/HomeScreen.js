import { Image, SafeAreaView, StyleSheet,Switch, Text, View } from 'react-native'
import React, { useState } from 'react'
import SearchBox from '../component/SearchBox'
import { TouchableOpacity } from 'react-native'
import NewsDetails from '../component/NewsDetails'

const HomeScreen = ({ route }) => {
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
  };

  // const { saveName } = route.params;
  const containerStyle = isNightMode ? styles.nightStyle : styles.dayStyle;
  const textStyle = isNightMode ? styles.nightText : styles.dayText;

  return (
    <SafeAreaView style={[styles.container, containerStyle,textStyle]}>
      <View style={styles.topView}>
          <View>
            <TouchableOpacity onPress={toggleNightMode}>
            <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isNightMode ? '#dda24a' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleNightMode}
            value={isNightMode}
          />

            </TouchableOpacity>
          </View>
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <Image style={styles.userIcon} source={require('../assets/icon/user.png')} />
            {/* <Text  style={[textStyle,styles.userName]}>{saveName.toUpperCase()}</Text> */}
          </View>
      </View>

      <NewsDetails  />
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:10,
    marginHorizontal:20,
    alignItems: 'center',
    
  },
  userIcon: {
    width: 40,
    height: 40,
  },
  

  dayStyle: {
    backgroundColor: '#eae4f8',
  },
  nightStyle: {
    backgroundColor: '#121212',
  },
  dayText: {
    color: 'black',
  },
  nightText: {
    color: '#eae4f8',
  },
  userName: {
    fontWeight: '700',
    color: '#37270a',
    fontSize:14,
    
  }
});
