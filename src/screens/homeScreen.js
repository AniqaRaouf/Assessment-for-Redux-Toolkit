import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../styles/Style';
import { setText } from '../redux/actions/textActions';

const HomeScreen = () => {
  const [inputText, setInputText] = useState('');
  const dispatch = useDispatch();
  const { text } = useSelector((state) => state.auth); // Access text state from Redux

  const handleTextChange = (text) => {
    setInputText(text);
  };

  const handleSubmit = () => {
    // Dispatch setText action to update text in Redux store
    dispatch(setText(inputText));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type something..."
        value={inputText}
        onChangeText={handleTextChange}
      />
      <TouchableOpacity style={styles.btnStyle} onPress={() => handleSubmit()}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Submit</Text>
      </TouchableOpacity>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{text}</Text>
      </View>
    </View>
  );
};

export default HomeScreen;
