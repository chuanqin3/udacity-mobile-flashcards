import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import TextButton from '../components/TextButton'
import { AppLoading } from 'expo'

class DeckDetail extends React.Component {
  // state = {
  //   ready: false,
  // }

  render() {
    const { navigation, decks } = this.props
    const deckName = navigation.getParam('deckName', 'no deck name found')

    // check if decks are loaded from async request
    // const { ready } = this.state
    // if (ready === false || decks === null) {
    //   return <AppLoading />
    // }

    // const cards = decks[deckName].cards
    // const numberOfQuestions = cards.length

    return (
      <View>
      <Text>{deckName} Deck Details</Text>
        <TouchableOpacity>
          <TextButton onPress={() => this.props.navigation.navigate('Quiz', { deckName })}>Start Quiz</TextButton>
          <TextButton onPress={() => this.props.navigation.navigate('AddCard', { deckName })}>Add Card</TextButton>
          <TextButton>Delete Deck</TextButton>
        </TouchableOpacity>
      </View>
    )
  }
}

// function mapStateToProps (state) {
//   return {
//     decks: state,
//   }
// }

export default connect()(DeckDetail)