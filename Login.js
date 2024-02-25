import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = () => {
    // Here you can add your login logic, for simplicity, I'll just log the username and password
    console.log('Username:', username);
    console.log('Password:', password);

    // Assuming login is successful, navigate to the inventory page
    navigation.navigate('Inventory');
  };

  const handleForgotPassword = () => {
    // Here you can add logic for handling forgot password action
    console.log('Forgot Password clicked');
  };

  const handleSignUpWithGoogle = () => {
    // Here you can add logic for signing up with Google
    console.log('Sign up with Google clicked');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My App</Text>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setUsername(text)}
          value={username}
          placeholder="Enter your username"
          placeholderTextColor="#808080"
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setPassword(text)}
          value={password}
          placeholder="Enter your password"
          secureTextEntry={true}
          placeholderTextColor="#808080"
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignUpWithGoogle}>
          <Text style={styles.signUpWithGoogle}>Sign up with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  formContainer: {
    width: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 20,
    textAlign: 'center',
    color: '#008000', // green color
  },
  label: {
    marginBottom: 5,
    color: 'black',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: 'black', // black color
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#007bff',
    marginBottom: 10,
  },
  signUpWithGoogle: {
    color: '#808080',
  },
});

export default Login;
