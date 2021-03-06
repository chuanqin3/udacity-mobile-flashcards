import { RECEIVE_DECKS, ADD_DECK, DELETE_DECK, ADD_CARD, SET_HIGHEST_SCORE } from '../actions'

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
          highestScore: 0,
          cards: [],
        },
      }
    case ADD_CARD :
      return {
        ...state,
        [action.deckName]: {
          ...state[action.deckName],
          cards: [
            ...state[action.deckName].cards,
            {
              question: action.question,
              answer: action.answer,
            }
          ]
        }
      }
    case DELETE_DECK :
      return Object.keys(state).filter(deckName => deckName !== action.deckName).reduce((obj, key) => {
        obj[key] = state[key];
        return obj
      }, {})
    case SET_HIGHEST_SCORE:
      return {
        ...state,
        [action.deckName]: {
          ...state[action.deckName],
          highestScore: action.newHighestScore,
        }
      }
    default :
      return state
  }
}