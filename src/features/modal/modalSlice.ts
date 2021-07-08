/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// types
import { InitialState } from './types';

const initialState: InitialState = {
  isOpen: false,
  data: null,
};

const createdSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<any | void>) {
      return {
        ...state,
        isOpen: true,
        data: action.payload,
      };
    },
    closeModal(state) {
      return {
        ...state,
        isOpen: initialState.isOpen,
        data: initialState.data,
      };
    },
  },
});

const { actions, reducer } = createdSlice;

export const { openModal, closeModal } = actions;

export default reducer;
