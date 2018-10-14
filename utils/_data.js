// AsyncStorage is a simple, unencrypted, asynchronous, persistent, key-value storage system that is global to the app.
// It should be used instead of LocalStorage.
import { AsyncStorage } from 'react-native'

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export const DECK_STORAGE_KEY = 'Flashcards:decks'

// @ is a decorator
_storeData = async () => {
  try {
    await AsyncStorage.setItem(DECK_STORAGE_KEY, 'I like to save it.');
  } catch (error) {
    // Error saving data
    console.warn('We have an error with saving data: ', error)
  }
}

setInitialDeck = () => {
  let initialDeck = {
    title: 'U.S. History',
    cards: {
      "8xf0y6ziyjabvozdd253nd": {
        id: '8xf0y6ziyjabvozdd253nd',
        question: 'What is the capital of the U.S.?',
        answer: 'Washington, D.C.'
      },
      "6ni6ok3ym7mf1p33lnez": {
        id: '6ni6ok3ym7mf1p33lnez',
        question: 'Who is the 45th president of the U.S.?',
        answer: 'Donald Trump'
      },
      "am8ehyc8byjqgar0jgpub9": {
        id: 'am8ehyc8byjqgar0jgpub9',
        question: 'How many states in the U.S.?',
        answer: '50'
      }
    }
  }

  AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(initialDeck))

  return initialDeck
}