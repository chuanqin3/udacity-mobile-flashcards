import { RECEIVE_DECKS, ADD_DECK, DELETE_DECKS } from '../actions'

export default function decks (state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS :
      return {
        ...state,
        ...action.decks,
      }
    case ADD_DECK :
      return {
        ...state,
        [action.deckName]: {
          numberOfCards: 0,
          cards: [],
        },
      }
    default :
      return state
  }
}