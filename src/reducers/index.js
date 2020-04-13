/* eslint-disable */
import { combineReducers } from 'redux';
import histData from './histData';
import quoteData from './quoteData';
import screenerData from './screenerData';

export const root = combineReducers({
  histData,
  quoteData,
  screenerData,
});
