import { FlatList,Linking, Image,TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SearchBox from './SearchBox'



const NewsDetails = ({navigation}) => {
    
    const [data, setData] = useState([])
    const [searchValue,setSearchValue] = useState('')
    useEffect(() => {
        fetchData()
    })
    let date = new Date()
    let getDay = date.getDate()
    let getMonth = date.getMonth()
    let getYear = date.getFullYear()
    let newDate = `${getYear}-${getMonth}-${getDay}`
    const fetchData = async() => {
        const API_KEY = 'c4568c2fcfcf4197886bafb6735e24db'
        let url = `https://newsapi.org/v2/everything?q=${searchValue}&from=${newDate}&sortBy=publishedAt&apiKey=${API_KEY}`
        let url1 = `https://newsapi.org/v2/everything?q=india&from=${newDate}&sortBy=publishedAt&apiKey=${API_KEY}`
        {
            searchValue ?
                await axios.get(url).then((res) => setData(res.data.articles)) :
                await axios.get(url1).then((res) => setData(res.data.articles))
            
            
        }
        

    }
    const openUrl = (item) => {
        Linking.openURL(item).catch((err)=>console.error("An error occured",err))
    }

    const renderItem = ({item}) => {
        return (
            <TouchableOpacity onPress={() => openUrl(item.url)} style={styles.container}>
                <Image source={{ uri: item.urlToImage }} style={ styles.imageView} />
                <View>
                    <Text style={styles.titleView}>{item.title}</Text>
                    <View style={styles.bottomView}>
                        <Text style={{color:'black',opacity:0.9}}>{item.author}</Text>
                        <Text style={{color:'black',opacity:0.9}}>{ item.publishedAt}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
  return (
      <>
          <SearchBox setSearchValue={ setSearchValue} />
          <FlatList data={data}
              renderItem={renderItem}
  
              keyExtractor={(item,index)=>index.toString()}
          />
      </>

  )
}

export default NewsDetails

const styles = StyleSheet.create({
    container: {
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 0.2,
        padding:20
    },
    imageView: {
        height: 200,
        width: '100%',
        borderRadius: 15,
        
    },
    titleView: {
        fontSize: 20,
        fontWeight: '900',
        color:'black'
    },
    bottomView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
        marginTop:5
    },


})