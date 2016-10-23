/* eslint-env mocha */
import { expect } from 'chai'
import { spy } from 'sinon'
import * as actions from '../../../client/store/counter/actions'

describe('actions', () => {
  describe('counter', () => {
    describe('#increment()', () => {
      it('should create increment action', () => {
        expect(actions.increment()).to.deep.equal({ type: actions.INCREMENT_COUNTER })
      })
    })

    describe('#decrement()', () => {
      it('should create decrement action', () => {
        expect(actions.decrement()).to.deep.equal({ type: actions.DECREMENT_COUNTER })
      })
    })

    describe('#incrementIfOdd()', () => {
      it('should create increment action', () => {
        const fn = actions.incrementIfOdd()
        expect(fn).to.be.a('function')
        const dispatch = spy()
        const getState = () => ({ counter: 1 })
        fn(dispatch, getState)
        expect(dispatch.calledWith({ type: actions.INCREMENT_COUNTER })).to.be.true
      })

      it('shouldn\'t create increment action if counter is even', () => {
        const fn = actions.incrementIfOdd()
        const dispatch = spy()
        const getState = () => ({ counter: 2 })
        fn(dispatch, getState)
        expect(dispatch.called).to.be.false
      })
    })
  })
})
