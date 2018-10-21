import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import TextButton from '../components/TextButton'

class DeckDetail extends React.Component {
  render() {
    const { navigation } = this.props
    const deckName = navigation.getParam('deckName', 'no deck name found')
    console.log(deckName)

    return (
      <View>
      <Text>{deckName} Deck Details</Text>
        <TouchableOpacity>
          <TextButton onPress={() => console.log('test')}>Start Quiz</TextButton>
          <TextButton>Add Card</TextButton>
          <TextButton>Delete Deck</TextButton>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect()(DeckDetail)