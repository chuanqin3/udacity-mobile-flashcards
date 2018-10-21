import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { connect } from 'react-redux'
import { receiveDecks } from '../actions'
import { fetchDecks } from '../utils/api'
import { AppLoading } from 'expo'
import DeckCard from '../components/DeckCard'
import { AsyncStorage } from 'react-native'

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


  render() {
    console.log('the state is ', this.state)
    console.log('the props is ', this.props)
    const { decks } = this.props
    const deckNames = Object.keys(decks)
    console.log(decks)
    // console.log('deckNames ', deckNames, deckNames.length)

    const deckList = deckNames.map((deck, id) => {
      // get the title of deck
      // const titleOfDeck = new Promise(function(resolve) {
      //   resolve(decks)
      // });
      // titleOfDeck.then(function(val) {
      //   return val[deck].title
      // }).then(function(val) {
      //   console.log(val);
      // })
      // get number of cards in the deck
      const numberOfCards = new Promise(function(resolve) {
        resolve(decks)
      });
      numberOfCards.then(function(val) {
        console.log(val);
        return val[deck].numberOfCards;
      }).then(function(val) {
        console.log(val);
      })

      return <DeckCard key={id} numberOfCards={this.numberOfCards}>{deck}</DeckCard>
    })


    // decide if we should render the view, avoid 'undefined' problem
    const { ready } = this.state
    if (ready === false ) {
      return <AppLoading />
    }

    // render the interface
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          {/* <DeckCard>{deckNames}</DeckCard> */}
          {deckList}
        </ScrollView>
      </View>
    );
  }
}

function mapStateToProps (decks) {
  console.log(decks.decks)
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
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
