/**import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function AddItems({navigation}) {
  return (
    <View>
      <Button onPress={() => navigation.navigate('Barscan')} title='Scan Bar'/>
    </View>
  )
}

const styles = StyleSheet.create({})
**/
import { Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const backgroundImage = require('./images/image2view.png');

export default function AddItems({ navigation }) {
  const [expiryDate, setExpiryDate] = useState('');

  const handleDateChange = (text) => {
    // Add your date validation logic here if needed
    setExpiryDate(text);
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        <Button onPress={() => navigation.navigate('Barscan')} title='Scan Barcode'/>
        <View style={styles.dateInputContainer}>
          <Text style={styles.textt2}>Enter Expiry Date:</Text>
          <TextInput
            style={styles.dateInput}
            onChangeText={handleDateChange}
            value={expiryDate}
            placeholder="YYYY-MM-DD"
            placeholderTextColor="white" // Placeholder color
            keyboardType="numeric"
            color="white" // Entered text color
          />
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:90,
    padding:20
  },
  dateInputContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  dateInput: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 5,
    width: 150,
  },
  textt2:{
    color:'white'
  }
});
