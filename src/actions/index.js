const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'
const REQUESTING_QUOTE_DATA = 'REQUESTING_QUOTE_DATA'
const RECEIVED_QUOTE_DATA = 'RECEIVED_QUOTE_DATA'

const requestingData = () => { return {type: REQUESTING_DATA} }
const receivedData = (data) => { return {type: RECEIVED_DATA, data: data} }
const requestingQuoteData = () => { return {type: REQUESTING_QUOTE_DATA}}
const receivedQuoteData = (data) => { return {type: RECEIVED_QUOTE_DATA, data: data}}

const handleHistAsync = (params) => {
  return async function(dispatch) {
    dispatch(requestingData())
    let response = await fetch('https://fmpcloud.io/api/v3/historical-price-full/AAPL?serietype=line&apikey=demo')
    let data = await response.json()
    dispatch(receivedData(data))

    // https://fmpcloud.io/api/v3/historical-price-full/AAPL?serietype=line&apikey=f6122bb1d358bf83d3df735b832d1204
  }
};

const handleQuoteData = (params) => {
  return async function(dispatch) {
    dispatch(requestingQuoteData())
    let response = await fetch('https://fmpcloud.io/api/v3/quote/AAPL?apikey=demo')
    let data = await response.json()
    dispatch(receivedQuoteData(data))
  }
}


export { 
  REQUESTING_DATA,
  RECEIVED_DATA,
  handleHistAsync,
  handleQuoteData
}
