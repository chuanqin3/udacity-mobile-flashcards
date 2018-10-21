import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function DeckCard ({ children, onPress, style={} }) {
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
