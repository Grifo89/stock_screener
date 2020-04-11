import histData from './histData'
import quoteData from './quoteData'
import { combineReducers } from 'redux'

export const root = combineReducers ({
  histData,
  quoteData
})
