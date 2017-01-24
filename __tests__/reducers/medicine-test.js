import React from 'react';
import reducer from '../../reducers/medicines'
import * as actions from '../../actions'


describe('medicine reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({})
  })

  it('should handle ADD_MEDICINE', () => {
    // 初期状態
    expect(
      reducer({}, {
        type: actions.ADD_MEDICINE,
        id: 'REDUCER_TEST001',
        name: 'test medicine',
        isVisible: false
      })
    ).toEqual(
      {
        'REDUCER_TEST001': {
          id: 'REDUCER_TEST001',
          name: 'test medicine',
          isVisible: false
        }
      }
    )

    // ステータス変更
    expect(
      reducer({
        id: 'REDUCER_TEST002',
        name: 'test medicine(before)',
        isVisible: false
      }, {
        type: actions.ADD_MEDICINE,
        id: 'REDUCER_TEST002',
        name: 'test medicine(after)',
        isVisible: true
      })
    ).toEqual(
      {
        'REDUCER_TEST002': {
          id: 'REDUCER_TEST002',
          name: 'test medicine(after)',
          isVisible: true
        },
        id: 'REDUCER_TEST002',
        name: 'test medicine(before)',
        isVisible: false
      }
    )
  })
})