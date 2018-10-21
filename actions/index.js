export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const CLEAR_DECKS = 'CLEAR_DECKS'

export function clearDecks() {
  return {
    type: CLEAR_DECKS,
    decks,
  }
}

export function receiveDecks (decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export function addDeck (deck) {
  return {
    type: ADD_DECK,
    deck,
  }
}
