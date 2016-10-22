import { push } from 'react-router-redux'
import * as counterActions from './counter/actions'

const actionCreators = {
  ...counterActions,
  push
}

export default actionCreators
