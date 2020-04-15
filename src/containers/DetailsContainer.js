import { connect } from 'react-redux';
import Details from '../components/Details/Details';
import { handleHistAsync, handleQuoteData } from '../actions';


const mapStateToProps = state => ({
  fetching: state.histData.fetching,
  symbol: state.histData.symbol,
  hist: state.histData.hist,
  name: state.quoteData.name,
  price: state.quoteData.price,
  change: state.quoteData.change,
  dayLow: state.quoteData.dayLow,
  dayHigh: state.quoteData.dayHigh,
  yearLow: state.quoteData.yearLow,
  yearHigh: state.quoteData.yearHigh,
  marketCap: state.quoteData.marketCap,
  exchange: state.quoteData.exchange,
  volume: state.quoteData.volume,
  open: state.quoteData.open,
  previousClose: state.quoteData.previousClose,
  earningsAnnouncement: state.quoteData.earningsAnnouncement,
  timestamp: state.quoteData.timestamp,
});

const mapDispatchToProps = dispatch => ({
  requestHistData: params => {
    dispatch(handleHistAsync(params));
  },

  requestQuoteData: params => {
    dispatch(handleQuoteData(params));
  },

});


export default connect(mapStateToProps, mapDispatchToProps)(Details);
