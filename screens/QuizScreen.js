import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native'
import { connect } from 'react-redux'
import TextButton from '../components/TextButton'
import { addCard } from '../actions'
import { NavigationActions } from 'react-navigation'

class QuizScreen extends React.Component {
  state = {
    showAnswer: false,
    numberOfQuestions: 0,
    currentQuestionStepper: 0,
  }

  showAnswer = () => {
    this.setState(({ showAnswer }) => ({showAnswer: !showAnswer}))
  }

  render () {
    const { navigation, decks } = this.props
    const deckName = navigation.getParam('deckName', 'no deck name found')
    console.log(this.state.showAnswer)

    return (
      <View>
        <Text>Question</Text>
        <Text>{decks[deckName].cards[0].question}</Text>
        { this.state.showAnswer ?
            <View>
              <Text>{decks[deckName].cards[0].answer}</Text>
              <TextButton onPress={this.showAnswer}>Hide Answer</TextButton>
            </View>
          : <TextButton onPress={this.showAnswer}>Show Answer</TextButton>
        }
      </View>
    )
  }
}

function mapStateToProps (state) {
  // const deckToQuiz = decks[deckName]
  console.log(state)
  return {
    decks: state,
  }
}

export default connect(mapStateToProps)(QuizScreen)