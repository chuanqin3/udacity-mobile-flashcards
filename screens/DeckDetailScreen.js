import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

function DeckDetail ({ children, onPress, style={} }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>Deck Details</Text>
    </TouchableOpacity>
  )
}

export default connect()(DeckDetail)