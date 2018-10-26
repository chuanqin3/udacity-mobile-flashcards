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
    const { navigation, decks } = this.props
    const deckName = navigation.getParam('deckName', 'no deck name found')

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{deckName} Deck ({decks[deckName] ? decks[deckName].cards.length : 0} cards)</Text>
        <TouchableOpacity>
          { decks[deckName] && decks[deckName].cards.length
            ? <TextButton onPress={() => navigation.navigate('Quiz', { deckName })}>Start Quiz</TextButton>
            : null
          }
          <TextButton onPress={() => navigation.navigate('AddCard', { deckName })}>Add Card</TextButton>
          <TextButton onPress={() => this.toDeleteCard(deckName)}>Delete Deck</TextButton>
        </TouchableOpacity>
      </View>
    )
  }
}

function mapStateToProps (decks) {
  return {
    decks,
  }
}

export default connect(mapStateToProps)(DeckDetail)

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
