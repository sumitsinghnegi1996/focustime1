import React , {useState}from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';

export const Timing = ({onchangeTime}) => {
  return (
    <>
    
    <View style={styles.timingButton}>
      <TouchableOpacity
       style={[styles.radius]} size={75} title="10" 
     onPress={() => onchangeTime(10)}
      >
        <Text style={[styles.text]}>10</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.timingButton}>
      <TouchableOpacity
       style={[styles.radius]} size={75} title="15" 
     onPress={() => onchangeTime(15)}
      >
        <Text style={[styles.text]}>15</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.timingButton}>
      <TouchableOpacity
       style={[styles.radius]} size={75} title="20" 
     onPress={() => onchangeTime(20)}
      >
        <Text style={[styles.text]}>20</Text>
      </TouchableOpacity>
    </View>
  
    </>
  )
}

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  radius: {
      borderRadius: 100 / 2,
      width: 100,
      height: 100,
      alignItems: 'center',
      borderColor: '#fff', 
      borderWidth: 2
    },
    text: { color: '#fff',marginTop: 20, fontSize: 100 / 3 },
});