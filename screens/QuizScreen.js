import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux'
import TextButton from '../components/TextButton'

class QuizScreen extends React.Component {
  state = {
    showAnswer: false,
    numberOfQuestions: this.props.decks[this.props.navigation.getParam('deckName')].cards.length,
    QuestionStepper: 0,
    correctAnswers: 0,
  }

  showAnswer = () => {
    this.setState(({ showAnswer }) => ({ showAnswer: !showAnswer }))
  }

  registerResponse = (value) => {
    if (value === 'correct') {
      this.setState(({ correctAnswers }) => ({ correctAnswers: correctAnswers + 1}))
    }
    this.setState(({ QuestionStepper }) => ({ QuestionStepper: QuestionStepper + 1}))

  }

  render () {
    const { navigation, decks } = this.props
    const { QuestionStepper, numberOfQuestions, correctAnswers } = this.state
    const deckName = navigation.getParam('deckName', 'no deck name found')
    const highestScore = this.props.decks[this.props.navigation.getParam('deckName')].highestScore

    // check if all cards are tested. If so, go to score page
    if (numberOfQuestions === QuestionStepper) {
      // reset stepper and correct answer counter
      this.setState(() => ({ QuestionStepper: 0, correctAnswers: 0}))

      return this.props.navigation.navigate('Score', { deckName, correctAnswers, numberOfQuestions, highestScore })
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Question {QuestionStepper+1} of {numberOfQuestions}</Text>
        <Text>{decks[deckName].cards[QuestionStepper].question}</Text>
        { this.state.showAnswer ?
            <View style={styles.container}>
              <Text>{decks[deckName].cards[QuestionStepper].answer}</Text>
              <TextButton onPress={() => this.registerResponse('correct')}>Correct</TextButton>
              <TextButton onPress={() => this.registerResponse('incorrect')}>Incorrect</TextButton>
            </View>
          : <TextButton onPress={this.showAnswer}>Show Answer</TextButton>
        }
      </View>
    )
  }
}

function mapStateToProps (state) {
  return {
    decks: state,
  }
}

export default connect(mapStateToProps)(QuizScreen)

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
