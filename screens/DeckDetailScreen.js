import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import TextButton from '../components/TextButton'
import { deleteDeck } from '../actions'
import { NavigationActions } from 'react-navigation'

class DeckDetail extends React.Component {
  toDeleteCard = (deckName) => {
    const { dispatch } = this.props
    dispatch(deleteDeck(deckName))

    // go back to home
    this.props.navigation.dispatch(NavigationActions.back())
  }

  render() {
    const { navigation } = this.props
    const deckName = navigation.getParam('deckName', 'no deck name found')
    const numberOfQuestions = navigation.getParam('numberOfQuestions', 'no number of questions found')

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{deckName} Deck ({numberOfQuestions} cards)</Text>
        <TouchableOpacity>
          <TextButton onPress={() => this.props.navigation.navigate('Quiz', { deckName })}>Start Quiz</TextButton>
          <TextButton onPress={() => this.props.navigation.navigate('AddCard', { deckName })}>Add Card</TextButton>
          <TextButton onPress={() => this.toDeleteCard(deckName)}>Delete Deck</TextButton>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect()(DeckDetail)

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
