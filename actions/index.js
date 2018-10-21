export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const CLEAR_DECKS = 'DELETE_DECK'

export function deleteDecks() {
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

export function addDeck (deckName) {
  return {
    type: ADD_DECK,
    deckName,
  }
}
