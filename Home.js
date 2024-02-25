import React from 'react';
import { View, Button, Text, Image } from 'react-native';
import Login from './Login';
const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={{uri:'https://scontent.fhyd1-3.fna.fbcdn.net/v/t39.30808-6/309203953_540385274756438_4969427331949734545_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=yCvK7YLvFr0AX8pM8Aq&_nc_ht=scontent.fhyd1-3.fna&oh=00_AfAV_ml_2cgMfuSyb2p2rlFS4xZzq3eT_Mj5O8FbJuutiA&oe=65DE736A'}} style={{ width:400,
  height:370, marginBottom:50}}></Image>
  <Text style={{color:'black', fontSize:30,marginBottom:100}}>Let's save food together!!</Text>
      <Button onPress={() => navigation.navigate('Login')} title='Get Started'/>
    </View>
  );
}


export default Home;

