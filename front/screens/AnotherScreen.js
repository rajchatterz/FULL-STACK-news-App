import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

const Tab = createMaterialTopTabNavigator()

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
    
    </View>
  )
}
const About = () => {
  return (
    <View>
      <Text>Home</Text>
    
    </View>
  )
}
const AnotherScreen = ({ route }) => {
  // const {name} = route.params
  return (
    <Tab.Navigator>
      <Tab.Screen name="Screen 1" component={Home} />
      <Tab.Screen name="Screen 2" component={About} />
   </Tab.Navigator>
  )
}

export default AnotherScreen