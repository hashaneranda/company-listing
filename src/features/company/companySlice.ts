/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// types
import { InitialState } from './types';

import CompanyData from './data';

const initialState: InitialState = {
  comapany: CompanyData,
};

const createdSlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
    editComapany(state, action: PayloadAction<any | void>) {
      const comapanyTemp = [...state.comapany];

      comapanyTemp[comapanyTemp.findIndex((item: any) => item.id === action.payload.id)] = action.payload;

      return {
        ...state,
        comapany: [...comapanyTemp],
      };
    },
  },
});

const { actions, reducer } = createdSlice;

export const { editComapany } = actions;

export default reducer;
