import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import SearchBar from './searchbar';
import Info from './Info';
import Info2 from './Info2';
import Info3 from './Info3';

export default function Inventory() {
  const navigation = useNavigation(); // Initialize navigation hook

  
  

  return (
    
    <View style={styles.container}>
      <SearchBar/>
      <View style={styles.Box}>
        <View style={styles.section1}>
          <Info/>
          <Info2/>
          <Info3/>
        </View>
        <View style={styles.section2}>
          <Text style={styles.heading}>Inventory</Text>
          <View style={styles.this}>
            {/* + button */}
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Scanpage') }>
              <Text style={styles.buttonText1}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.Down}>
          {/* Buttons */}
          <TouchableOpacity style={styles.insidebutton} onPress={() => console.log('Button Pressed')}>
            <Text style={styles.buttonText}>new</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.insidebutton} onPress={() => console.log('Button Pressed')}>
            <Text style={styles.buttonText}>Items</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.insidebutton} onPress={() => navigation.navigate('Recipies')}>
            <Text style={styles.buttonText}>Recipes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.insidebutton} onPress={() => navigation.navigate('UserProfileView')}>
            <Text style={styles.buttonText}>Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  Box: {
    flex: 1,
    margin: 10,
    padding: 10,
    alignItems: 'center',
  },
  section1: {
    marginBottom: 10,
  },
  section2: {
    marginBottom: 10,
    flex: 2,
  },
  heading: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 50,
  },
  this: {
    position: 'absolute',
    right: -90,
    bottom: -5,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 40,
    right: 16,
    backgroundColor: '#3498db',
    paddingBottom:5,
    borderRadius: 5,
    alignItems: 'center',
    width: 50,
    height: 45,
    margin: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonText1: {
    color: '#ffffff',
    fontSize: 27,
    fontWeight: 'bold',
  },
  Down: {
    position: 'absolute',
    bottom: 1,
    width: 400,
    height:70,
    maxHeight: 75,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
    backgroundColor: '#000000',
    marginBottom: -10,
  },
  insidebutton: {
    backgroundColor: 'grey',
    borderRadius: 5,
    alignItems: 'center',
    width: 70,
    height: 30,
    marginHorizontal: 15,
  },
});
