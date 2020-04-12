import { connect } from 'react-redux'
import { handleScreenerData } from '../actions'
import Screener from '../components/Screener/Screener'

const mapStateToProps = state => ({ screener: state.screenerData.screener })

const mapDispatchToProps = dispatch => ({

  requestScreenerData: params => {
    dispatch(handleScreenerData(params))
  }

})

export default connect(mapStateToProps, mapDispatchToProps)(Screener)
