import React, { Component, PropTypes } from 'react'

import styles from './styles.scss'

const propTypes = {
  children: PropTypes.element.isRequired
}

class App extends Component {
  render () {
    return (
      <div className={styles.root}>
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = propTypes

export default App
