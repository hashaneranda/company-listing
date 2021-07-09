/* eslint-disable react/react-in-jsx-scope */
import reducer from '../companySlice';
import * as actions from '../companySlice';

// types
import { InitialState } from '../types';

import CompanyData from '../data';

const initialState: InitialState = {
  comapany: CompanyData,
};

describe('company slice', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle editComapany action', () => {
    const payload = {
      ...initialState.comapany[0],
      budget: 500000,
    };
    const companyDataList = [...CompanyData];
    companyDataList[0] = payload;

    const targetState = { ...initialState, comapany: companyDataList };

    expect(reducer(undefined, actions.editComapany(payload))).toEqual(targetState);
  });
});
