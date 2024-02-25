import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EF7981',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    marginHorizontal: 10,
    marginTop: 20,
  },
  searchInput: {
    placeholderTextColor:"#000000",
    color: '#000000',
    fontWeight:'bold',
    fontSize: 16,
  },
});

export default SearchBar;