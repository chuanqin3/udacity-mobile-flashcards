import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native'
import { connect } from 'react-redux'
import TextButton from '../components/TextButton'
import { addCard } from '../actions'
import { NavigationActions } from 'react-navigation'

class ScoreScreen extends React.Component {
  render () {
    return (
      <View>
        <Text>Questions</Text>
      </View>
    )
  }
}

export default connect()(ScoreScreen)