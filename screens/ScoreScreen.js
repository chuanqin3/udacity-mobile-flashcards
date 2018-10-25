import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux'
import TextButton from '../components/TextButton'
import { setHighestScore } from '../actions'

class ScoreScreen extends React.Component {
  render () {
    const { navigation, dispatch } = this.props
    const deckName = navigation.getParam('deckName', 'no deck name found')
    const correctAnswers = navigation.getParam('correctAnswers', 'no correctAnswers found')
    const numberOfQuestions = navigation.getParam('numberOfQuestions', 'no numberOfQuestions found')
    const highestScore = navigation.getParam('highestScore', 'no highest score found')

    if (correctAnswers > highestScore) {
      dispatch(setHighestScore(deckName, correctAnswers))
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Score</Text>
        <Text>You mastered {correctAnswers} out of {numberOfQuestions} cards in {deckName} deck.</Text>
        {correctAnswers < highestScore ? (
          <View>
            <Text>Your highest score is {highestScore}. Re-take this quiz to set a new record!</Text>
          </View>
        ) : (
          <View>
            <Text>Congratulation! You set a new record! Your highest score is now {correctAnswers}.</Text>
          </View>
        )}
        <TextButton onPress={() => this.props.navigation.navigate('Quiz')}>Restart Quiz?</TextButton>
        <TextButton onPress={() => this.props.navigation.navigate('Decks')}>Go back to Home</TextButton>
      </View>
    )
  }
}

export default connect()(ScoreScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    padding: 10,
  },
})
