// AsyncStorage is a simple, unencrypted, asynchronous, persistent, key-value storage system that is global to the app.
// It should be used instead of LocalStorage.
import { AsyncStorage } from 'react-native'

export const DECK_STORAGE_KEY = 'Flashcards:decks'

setInitialDeck = () => {
  let initialDeck = {
    USHistory: {
      title: 'U.S. History',
      numberOfCards: 3,
      cards: [
        {
          question: 'What is the capital of the U.S.?',
          answer: 'Washington, D.C.'
        },
        {
          question: 'Who is the 45th president of the U.S.?',
          answer: 'Donald Trump'
        },
        {
          question: 'How many states in the U.S.?',
          answer: '50'
        },
      ]
    },
    WorldHistory: {
      title: 'World History',
      numberOfCards: 2,
      cards: [
        {
          question: 'What is the capital of China?',
          answer: 'Beijing'
        },
        {
          question: 'Which country started the WW 2?',
          answer: 'Nazi Germany'
        },
      ]
    }
  }

  AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(initialDeck))

  return initialDeck
}


export function formatDecksResult (results) {
  return results === null
    ? setInitialDeck()
    : results
}
