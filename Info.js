import { StyleSheet, Text, View,TouchableOpacity, Image, Button } from 'react-native'
import React,{useEffect} from 'react'

export default function Info() {

  
  
    let color='#00FF00'
    const iscolor=color==='#00FF0'? color='#00FF00' : color='#FF0000'
  return (
    <View style={styles.containerStyle}>
      <View style={styles.up}> 
      <Image source={{uri:'https://images.albertsons-media.com/is/image/ABS/960123886-ECOM?$ng-ecom-pdp-desktop$&defaultImage=Not_Available'}} style={styles.image}></Image>
        <Text style={styles.textt}>Name: Lays{'\n'}{'\n'}Date: DD/MM/YYYY</Text>
        <Text style={styles.Label}>Safe</Text>
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
      backgroundColor:'green',
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