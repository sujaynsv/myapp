import { StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function Info3() {
    let color='#00FF00'
    const iscolor=color==='#00FF0'? color='#00FF00' : color='#FF0000'
  return (
    <View style={styles.containerStyle}>
      <View style={styles.up}> 
      <Image source={{uri:'https://5.imimg.com/data5/OT/UC/VQ/ANDROID-102928328/product-jpeg-500x500.jpg'}} style={styles.image}></Image>
        <Text style={styles.textt}>Name: Bread{'\n'}{'\n'}Date: DD/MM/YYYY</Text>
        <Text style={styles.Label}>Expired</Text>
      </View>
      <View><TouchableOpacity style={styles.buttonContainer} onPress={() => console.log('Button Pressed')}>
              <Text style={styles.buttonText}>X</Text>
        </TouchableOpacity></View>
    </View>
  


  )
}

const styles = StyleSheet.create({
    containerStyle: {
      minHeight:150,
        padding: 10,
        backgroundColor: 'skyblue',
        borderWidth:0,
        marginBottom:10,
        marginLeft:10,
        marginRight:10,
        borderColor:'#808080',
        marginTop:10,
        flexDirection:'row',
        flexWrap:'wrap',
        width:370,
        height:50
    },
    Motion:{
        elevation:20,
        backgroundColor: '#FF0000'  
    },
    Label:{
      position:'absolute',
      padding:10,
      top:10,
      left:280,
      backgroundColor:'darkred',
      color:'#FFFFFF',
    },
    buttonContainer: {
      position:'absolute',
      top:70,
      left:18,
      backgroundColor: 'red',
      alignItems: 'center',
      width:25,
      borderRadius:6,
      margin:10
    },
    buttonText: {
      color: '#ffffff',
      fontSize: 22,
      fontWeight: 'bold',
    },
    up:{
      flexDirection:'row',
    },
image:{
  width:120,
  height:120
},
textt:{
  paddingLeft:20,
  color:'black'
},
textt2:{
  
  paddingLeft:20,
  color:'black'
}
})