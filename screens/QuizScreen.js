import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native'
import { connect } from 'react-redux'
import TextButton from '../components/TextButton'
import { addCard } from '../actions'
import { NavigationActions } from 'react-navigation'

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
    console.log(value)
    if (value === 'correct') {
      this.setState(({ correctAnswers }) => ({ correctAnswers: correctAnswers + 1}))
    }
    this.setState(({ QuestionStepper }) => ({ QuestionStepper: QuestionStepper + 1}))
  }

  render () {
    const { navigation, decks } = this.props
    const { QuestionStepper, numberOfQuestions, correctAnswers } = this.state
    const deckName = navigation.getParam('deckName', 'no deck name found')

    // check if all cards are tested. If so, go to score page
    if (numberOfQuestions === QuestionStepper) {
      // reset stepper and correct answer counter
      this.setState(() => ({ QuestionStepper: 0, correctAnswers: 0}))

      return this.props.navigation.navigate('Score', { deckName, correctAnswers, numberOfQuestions })
    }

    return (
      <View>
        <Text>Question</Text>
        <Text>{decks[deckName].cards[QuestionStepper].question}</Text>
        { this.state.showAnswer ?
            <View>
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