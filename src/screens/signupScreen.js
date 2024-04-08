import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, ToastAndroid, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import TypingText from '../components/TypingText';
import styles from '../styles/Style';
import { signup } from '../redux/actions/authActions';
const SignupScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(email)) {
      Alert.alert('InValid Email', 'Email format is incorrect!');
    }
    else if (password == "") {
      Alert.alert('Please Enter password');
    }
    else if (confirmPassword == "") {
      Alert.alert('Please Enter Confirm password');
    } else if (password != confirmPassword) {
      Alert.alert('Password does not match');
    }
    else {
      const user = { email, password };
      dispatch(signup(user));
      navigation.navigate('Login');
    }
  }
  return (
    <View style={styles.container}>
      <TypingText text={"Signup"} delay={100} />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={'#11544a'}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={'#11544a'}
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor={'#11544a'}
        secureTextEntry
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
      />
      <TouchableOpacity style={styles.btnStyle} onPress={() => handleSignup()}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Sign Up</Text>
      </TouchableOpacity>

    </View>
  );
};
export default SignupScreen;
