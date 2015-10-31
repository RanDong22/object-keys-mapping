
'use strict'

import { deepEqual as equal } from 'assert'
import { pickDiff } from '../lib'

describe('pickDiff', () => {
  describe('basic', () => {
    it('pick new property even undefined', () => {
      const origin = {
        a: 'a',
        b: 'b',
        c: undefined
      }

      const update = {
        a: 'aa',
        b: 'b',
        d: undefined
      }

      const expect = {
        a: 'aa',
        d: undefined
      }

      equal(pickDiff(origin, update), expect)
    })

    it('with object', () => {
      const origin = {
        a: 'a',
        b: {
          name: 'b'
        }
      }

      const update = {
        a: 'aa',
        b: {
          name: 'b'
        },
        c: 'c'
      }

      const expect = {
        a: 'aa',
        b: {
          name: 'b'
        },
        c: 'c'
      }

      equal(pickDiff(origin, update), expect)
    })
  })
})
