import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { Router, hashHistory } from 'react-router'
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import actionCreators from './store/actions'
import rootReducer from './store/reducers'
import routes from './routes'

// Font Awesome
require('font-awesome-webpack2')

// Styles
import './index.scss'

// The application mount point
const mount = document.getElementById('app')

// The router middleware
const router = routerMiddleware(hashHistory)

// Logger (for development)
const logger = createLogger({
  level: 'info',
  collapsed: true
})

const store = configureStore()
const history = syncHistoryWithStore(hashHistory, store)

function configureStore (initialState) {
  if (process.env.NODE_ENV === 'production') {
    const enhancer = applyMiddleware(thunk, router)
    return createStore(rootReducer, initialState, enhancer)
  } else {
    // Attach the logger into the devtools
    const enhancer = compose(
      applyMiddleware(thunk, router, logger),
      window.devToolsExtension
        ? window.devToolsExtension({ actionCreators })
        : (noop) => { return noop }
    )

    const store = createStore(rootReducer, initialState, enhancer)

    if (window.devToolsExtension) {
      window.devToolsExtension.updateStore(store)
    }

    return store
  }
}

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  mount
)
