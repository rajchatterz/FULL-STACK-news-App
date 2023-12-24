import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'
const WebView = ({ route }) => {
    const {url} = route.params;
  return (
      <WebView source={{ uri: url }} />
  )
}

export default WebView

const styles = StyleSheet.create({})