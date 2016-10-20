import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import styles from './styles.scss'

const propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
}

class Counter extends Component {
  render () {
    const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props
    return (
      <div className={styles.counterContainer}>
        <div className={styles.backButton}>
          <Link to='/'>
            <i className='fa fa-arrow-left fa-3x' />
          </Link>
        </div>
        <div className={styles.counterWrapper}>
          <div className={`${styles.counter}`}>
            {counter}
          </div>
          <div className={styles.btnGroup}>
            <button className={styles.btn} onClick={increment}>
              <i className='fa fa-plus' />
            </button>
            <button className={styles.btn} onClick={decrement}>
              <i className='fa fa-minus' />
            </button>
            <button className={styles.btn} onClick={incrementIfOdd}>odd</button>
            <button className={styles.btn} onClick={() => incrementAsync()}>async</button>
          </div>
        </div>
      </div>
    )
  }
}

Counter.propTypes = propTypes

export default Counter
