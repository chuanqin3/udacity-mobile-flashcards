import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native'
import { connect } from 'react-redux'
import TextButton from '../components/TextButton'
import { addCard } from '../actions'
import { NavigationActions } from 'react-navigation'

class ScoreScreen extends React.Component {
  render () {
    const { navigation } = this.props
    const deckName = navigation.getParam('deckName', 'no deck name found')
    const correctAnswers = navigation.getParam('correctAnswers', 'no correctAnswers found')
    const numberOfQuestions = navigation.getParam('numberOfQuestions', 'no numberOfQuestions found')

    console.log(this.props.navigation)
    return (
      <View>
        <Text>Score</Text>
        <Text>You mastered {correctAnswers} out of {numberOfQuestions} cards in {deckName} deck!</Text>
        <TextButton onPress={() => this.props.navigation.navigate('Quiz')}>Restart Quiz?</TextButton>
        <TextButton onPress={() => this.props.navigation.navigate('Decks')}>Go back to Home</TextButton>
      </View>
    )
  }
}

export default connect()(ScoreScreen)