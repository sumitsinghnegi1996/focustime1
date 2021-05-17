import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';
import { fontSizes } from '../../utils/size';
export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}> what would you like to focus on?</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={{ flex: 1, marginRight: 20 }}
      
             onSubmitEditing={({ nativeEvent: { text } }) => setSubject(text)}
          />
          <TouchableOpacity
            style={[styles.radius]}
            onPress={() => {
              addSubject(subject);
            }}>
            <Text style={[styles.text]}>+</Text>
          </TouchableOpacity>
        
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
  },
  titleContainer: {
    flex: 1,
    padding: fontSizes.md,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: fontSizes.xl,
  },
  inputContainer: {
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
   radius: {
    borderRadius: 50 / 2,
    width: 50,
    height: 50,
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 2,
  },
  text: { color: '#fff', marginTop: 5, fontSize: 70 / 3 },
});
