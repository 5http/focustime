
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import { colors } from '../utils/colors';
import {RoundedButton} from '../components/RoundedButton';
import { spacing } from '../utils/sizes';

export const Focus = ({addSubject}) => {
  
  const [subject, setSubject] = useState('test');
  
  console.log(subject)

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
        style={styles.textInput}
        onChangeText={setSubject}
        label='What would you like to focus on?' />
        <View style={styles.button}>
        <RoundedButton 
        onPress={() => addSubject(subject)}
        title='+' size={50} />
      </View>
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
  },
  button: {
    justifyContent: 'center'
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: 'flex-start',
    flexDirection: 'row'
  }
});