import histData from './histData'
import quoteData from './quoteData'
import screenerData from './screenerData'
import { combineReducers } from 'redux'

export const root = combineReducers ({
  histData,
  quoteData,
  screenerData
})
