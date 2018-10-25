import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux'
import { receiveDecks } from '../actions'
import { fetchDecks } from '../utils/api'
import { AppLoading } from 'expo'
import DeckCard from '../components/DeckCard'

class DecksScreen extends React.Component {
  state = {
    ready: false,
  }
  componentDidMount() {
    const { dispatch } = this.props

    // temporary: clear local storage data
    // AsyncStorage.removeItem('Flashcards:decks')

    // fetch data from Redux State
    fetchDecks()
      .then((decks) => dispatch(receiveDecks(decks)))
      .then(() => this.setState(() => ({ready: true})))
      .catch(function(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
         // ADD THIS THROW error
          throw error;
      })
  }

  static navigationOptions = {
    header: null,
  };

  toDetail = (deck) => {
    this.props.navigation.navigate('DeckDetail', { deck })
  }

  render() {
    const { decks } = this.props

    // decide if we should render the view, avoid 'undefined' problem
    const { ready } = this.state
    if (ready === false || decks === null) {
      return <AppLoading />
    }

    const deckNames = Object.keys(decks)
    const deckList = deckNames.map((deckName, id) => {
      // get number of cards in the deck
      // const numberOfCards = new Promise(function(resolve) {
      //   resolve(decks)
      // });
      // numberOfCards.then(function(val) {
      //   console.log(val);
      //   return val[deck].numberOfCards;
      // }).then(function(val) {
      //   console.log(val);
      // })

      const highestScore = decks[deckName].highestScore
      const numberOfQuestions = decks[deckName].cards.length

      return <DeckCard key={id}
              numberOfQuestions={numberOfQuestions}
              onPress={() => this.props.navigation.navigate('DeckDetail', { deckName, numberOfQuestions })}
              highestScore={highestScore}
              >
                {deckName}
            </DeckCard>
    })

    // render the interface
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Your Decks</Text>
        <ScrollView contentContainerStyle={{alignItems: 'center'}}>
          {deckList}
        </ScrollView>
      </View>
    );
  }
}

function mapStateToProps (decks) {
  return {
    decks,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatch,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DecksScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    padding: 20,
  },
});
