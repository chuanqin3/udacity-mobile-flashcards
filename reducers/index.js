import { RECEIVE_DECKS, ADD_DECK, CLEAR_DECKS } from '../actions'
import { initialDeck } from '../utils/_data'

export default function decks (state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS :
      return {
        ...state,
        decks: action.decks,
      }
    case ADD_DECK :
      return {
        ...state,
        ...action.deck,
      }
    default :
      return state
  }
}