/* eslint-disable react/react-in-jsx-scope */
import reducer from '../modalSlice';
import * as actions from '../modalSlice';

// types
import { InitialState } from '../types';

const initialState: InitialState = {
  isOpen: false,
  data: null,
};

describe('modal slice', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle openModal action', () => {
    const payload = (
      <div>
        <h1>Test</h1>
      </div>
    );
    const targetState = { ...initialState, isOpen: true, data: payload };
    const customInitialState = { ...initialState, isOpen: false, data: payload };

    expect(reducer(undefined, actions.openModal(payload))).toEqual(targetState);
    expect(reducer(customInitialState, actions.openModal(payload))).toEqual(targetState);
  });

  it('should handle closeModal action', () => {
    const customInitialState = { ...initialState, isOpen: true };
    expect(reducer(undefined, actions.closeModal())).toEqual(initialState);
    expect(reducer(customInitialState, actions.closeModal())).toEqual(initialState);
  });
});
