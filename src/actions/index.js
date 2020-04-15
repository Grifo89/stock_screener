import { API_KEY } from '../apiKey';

const REQUESTING_DATA = 'REQUESTING_DATA';
const RECEIVED_DATA = 'RECEIVED_DATA';
const REQUESTING_QUOTE_DATA = 'REQUESTING_QUOTE_DATA';
const RECEIVED_QUOTE_DATA = 'RECEIVED_QUOTE_DATA';
const REQUESTING_SCREENER_DATA = 'REQUESTING_SCREENER_DATA';
const RECEIVED_SCREENER_DATA = 'RECEIVED_SCREENER_DATA';

const requestingData = () => ({ type: REQUESTING_DATA });
const receivedData = data => ({ type: RECEIVED_DATA, data });
const requestingQuoteData = () => ({ type: REQUESTING_QUOTE_DATA });
const receivedQuoteData = data => ({ type: RECEIVED_QUOTE_DATA, data });
const requestingScreenerData = () => ({ type: REQUESTING_SCREENER_DATA });
const receivedScreenerData = data => ({ type: RECEIVED_SCREENER_DATA, data });


const handleHistAsync = params => {
  const paramsUpperCase = params.toUpperCase();
  const url = `https://fmpcloud.io/api/v3/historical-price-full/${API_KEY.length === 0 ? 'AAPL' : paramsUpperCase}?serietype=line&apikey=${API_KEY.length === 0 ? 'demo' : API_KEY}`;
  return async function a(dispatch) {
    dispatch(requestingData());
    const response = await fetch(url, { mode: 'cors' });
    const data = await response.json();
    dispatch(receivedData(data));
  };
};

const handleQuoteData = params => {
  const paramsUpperCase = params.toUpperCase();
  const url = `https://fmpcloud.io/api/v3/quote/${API_KEY.length === 0 ? 'AAPL' : paramsUpperCase}?apikey=${API_KEY.length === 0 ? 'demo' : API_KEY}`;
  return async function a(dispatch) {
    dispatch(requestingQuoteData());
    const response = await fetch(url, { mode: 'cors' });
    const data = await response.json();
    dispatch(receivedQuoteData(data));
  };
};

const handleScreenerData = () => async function a(dispatch) {
  if (API_KEY.length !== 0) {
    const url = `https://fmpcloud.io/api/v3/stock-screener?volumeLowerThan=1000&limit=100&apikey=${API_KEY}`;
    dispatch(requestingScreenerData());
    const response = await fetch(url, { mode: 'cors' });
    const data = await response.json();
    dispatch(receivedScreenerData(data));
  }
};


export {
  REQUESTING_DATA,
  REQUESTING_QUOTE_DATA,
  RECEIVED_QUOTE_DATA,
  RECEIVED_DATA,
  RECEIVED_SCREENER_DATA,
  REQUESTING_SCREENER_DATA,
  handleScreenerData,
  handleHistAsync,
  handleQuoteData,
};
