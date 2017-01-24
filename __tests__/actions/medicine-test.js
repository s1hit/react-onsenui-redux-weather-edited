import React from 'react';
import * as actions from '../../actions'

describe('medicine actions', () => {
  it('should create an action to add a medicine', () => {
    const sampleAction = {
      id: 'ACTION_TEST001',
      name: 'sample medicine',
      isVisible: true
    };

    const expectedAction = {
      type: actions.ADD_MEDICINE,
      id: sampleAction.id,
      name: sampleAction.name,
      isVisible: sampleAction.isVisible
    };
    expect(actions.addMedicine(sampleAction)).toEqual(expectedAction)
  })
})