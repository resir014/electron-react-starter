import { createStore, applyMiddleware, compose } from 'redux'
import { hashHistory } from 'react-router'
import { routerMiddleware, push } from 'react-router-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'

import * as counterActions from '../actions/counter'

const actionCreators = {
  ...counterActions,
  push
}

const logger = createLogger({
  level: 'info',
  collapsed: true
})

const router = routerMiddleware(hashHistory)

const enhancer = compose(
  applyMiddleware(thunk, router, logger),
  window.devToolsExtension
    ? window.devToolsExtension({ actionCreators })
    : (noop) => { return noop }
)

export default function configureStore (initialState) {
  const store = createStore(rootReducer, initialState, enhancer)

  if (window.devToolsExtension) {
    window.devToolsExtension.updateStore(store)
  }

  return store
}
