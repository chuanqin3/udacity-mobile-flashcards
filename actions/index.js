export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const DELETE_DECK = 'DELETE_DECK'
export const ADD_CARD = 'ADD_CARD'
export const SET_HIGHEST_SCORE = 'SET_HIGHEST_SCORE'

export function setHighestScore(deckName, newHighestScore) {
  return {
    type: SET_HIGHEST_SCORE,
    deckName,
    newHighestScore,
  }
}

export function deleteDeck(deckName) {
  return {
    type: DELETE_DECK,
    deckName,
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

export function addCard (deckName, question, answer) {
  return {
    type: ADD_CARD,
    deckName,
    question,
    answer,
  }
}
