import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/Style';
import TypingText from '../components/TypingText';
import { login } from '../redux/actions/authActions';
const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleLogin = () => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(email)) {
      Alert.alert('InValid Email', 'Email format is incorrect!');
    }
    else if (password == "") {
      Alert.alert('Please Enter password');
    }
    else {
      dispatch(login({ email, password }));
      console.log(isLoggedIn)
      if (isLoggedIn) {
        navigation.navigate('HomeScreen')
      }
      else {
        Alert.alert('Invalid credentials')
      }
    }
  };

  return (
    <View style={styles.container}>
      <TypingText text={"Login"} delay={100} />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.btnStyle} onPress={() => handleLogin()}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};



export default LoginScreen;
