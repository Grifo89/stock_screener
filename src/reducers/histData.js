import { RECEIVED_DATA, REQUESTING_DATA } from '../actions'

const histData = (state = {}, action) => {
  switch (action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        symbol: '',
        hist: []
      }
    case RECEIVED_DATA:
      localStorage.setItem("data", JSON.stringify(action.data))
      return {
        fetching: false,
        symbol: action.data.symbol,
        hist: action.data.historical
      }
    default:
      return state
  }
}

export default histData
