import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Counter from '../../components/Counter'
import * as CounterActions from '../../store/counter/actions'

function mapStateToProps (state) {
  return {
    counter: state.counter
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(CounterActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
