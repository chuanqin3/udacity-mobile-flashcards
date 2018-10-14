import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { purple } from '../utils/colors'

// children is the text that comes from <TextButton>{children}</TextButton>
// onPress invokes a function when the button is pressed
// style is set to default and allows overriding
export default function TextButton ({ children, onPress, style={} }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.button, style]}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    textAlign: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 100,
    margin: 10,
  }
})
