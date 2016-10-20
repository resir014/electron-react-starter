import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import routes from './routes'
import configureStore from './store/configureStore'

// Font Awesome
require('font-awesome-webpack2')

// Styles
import './app.global.scss'

const store = configureStore()
const history = syncHistoryWithStore(hashHistory, store)

const mount = document.getElementById('app')

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  mount
)
