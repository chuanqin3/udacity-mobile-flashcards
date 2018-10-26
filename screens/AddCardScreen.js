import React from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput } from 'react-native'
import { connect } from 'react-redux'
import TextButton from '../components/TextButton'
import { addCard } from '../actions'
import { NavigationActions } from 'react-navigation'

class AddCardScreen extends React.Component {
  state = {
    question: '',
    answer: '',
  }

  onSubmitEdit = () => {
    const question = this.state.question
    const answer = this.state.answer
    const { dispatch, navigation } = this.props
    const deckName = navigation.getParam('deckName', 'no deck name found')

    // add validation to prevent empty question and answer
    if (!question) {
      return alert("Question cannot be empty. Please re-enter.")
    } else if (!answer) {
      return alert("Answer cannot be empty. Please re-enter.")
    }

    // add card to the selected deck
    dispatch(addCard(deckName, question, answer))

    // go back to previous page
    this.props.navigation.dispatch(NavigationActions.back())
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Text style={styles.title}>What is the question of your new card?</Text>
        <TextInput
          style={[styles.inputBox]}
          maxLength={50}
          onChangeText={(question) => this.setState({question})}
          placeholder={`Input the question here`}
          onSubmitEditing={this.onSubmitEdit}
        />
        <Text style={styles.title}>What is the answer of your new card?</Text>
        <TextInput
          style={[styles.inputBox]}
          maxLength={100}
          onChangeText={(answer) => this.setState({answer})}
          placeholder={`Input the answer here`}
          onSubmitEditing={this.onSubmitEdit}
        />
        <TextButton onPress={this.onSubmitEdit}>Add Card</TextButton>
      </KeyboardAvoidingView>
    )
  }
}

export default connect()(AddCardScreen)

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
  inputBox: {
    height: 30,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
  }
});
