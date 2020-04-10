import { connect } from 'react-redux';
import { App } from '../components'
import { handleHistAsync } from '../actions'

const mapStateToProps = state => ({fetching: state.fetching, symbol: state.symbol, hist: state.hist})

const mapDispatchToProps = dispatch => ({
  requestData: params => {
    dispatch(handleHistAsync(params))
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(App)
