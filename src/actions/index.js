const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

const requestingData = () => { return {type: REQUESTING_DATA} }
const receivedData = (data) => { return {type: RECEIVED_DATA, data: data} }

const handleAsync = (params) => {
  return async function(dispatch) {
    console.log(params);
    dispatch(requestingData())
    let response = await fetch('https://fmpcloud.io/api/v3/historical-price-full/AAPL?serietype=line&apikey=f6122bb1d358bf83d3df735b832d1204')
    let data = await response.json()
    dispatch(receivedData(data))
  }
};

export { REQUESTING_DATA, RECEIVED_DATA, handleAsync }
