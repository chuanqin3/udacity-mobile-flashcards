import { AsyncStorage } from 'react-native'
import { DECK_STORAGE_KEY, formatDecksResult } from './_data.js'

export function fetchDecks () {
  return AsyncStorage.removeItem(DECK_STORAGE_KEY)
    // .then(AsyncStorage.getItem(DECK_STORAGE_KEY))
    .then(formatDecksResult)
}
