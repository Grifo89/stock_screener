import { RECEIVED_QUOTE_DATA, REQUESTING_QUOTE_DATA } from '../actions'

const quoteData = (state={}, action) => {
  switch (action.type) {
    case REQUESTING_QUOTE_DATA:
      return {
        name: '',
        price: 0,
        change: 0,
        dayLow: 0,
        dayHigh: 0,
        yearLow: 0,
        yearHigh: 0,
        marketCap: 0,
        exchange: '',
        volume: 0,
        open: 0,
        previousClose: 0,
        earningsAnnouncement: '',
        timestamp: 0
      }
    case RECEIVED_QUOTE_DATA:
      return {
        name: action.data[0].name,
        price: action.data[0].price,
        change: action.data[0].change,
        dayLow: action.data[0].dayLow,
        dayHigh: action.data[0].dayHigh,
        yearLow: action.data[0].yearLow,
        yearHigh: action.data[0].yearHigh,
        marketCap: action.data[0].marketCap,
        exchange: action.data[0].exchange,
        volume: action.data[0].volume,
        open: action.data[0].open,
        previousClose: action.data[0].previousClose,
        earningsAnnouncement: action.data[0].earningsAnnouncement,
        timestamp: action.data[0].timestamp
      }

    default:
      return state

  }
}

export default quoteData
