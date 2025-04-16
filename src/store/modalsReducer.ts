import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ModalsState } from '../types/interfaces';

const INIT_STATE: ModalsState = {
  createChatModal: false,
  profileModal: false,
  toogleDrawer: false,
  createBrothelModal: false,
  reconnectBtn: false
};

const modalsReducer = createSlice({
  name: "modals",
  initialState: INIT_STATE,
  reducers: {
    setCreateChatModal: (state, action: PayloadAction<{ createChatModal: boolean }>) => {
      return {
        ...state,
        createChatModal: action.payload.createChatModal
      };
    },
    setReconnectBtn: (state, action: PayloadAction<{ reconnectBtn: boolean }>) => {
      return {
        ...state,
        reconnectBtn: action.payload.reconnectBtn
      };
    },
    setToogleDrawer: (state, action: PayloadAction<{ toogleDrawer: boolean }>) => {
      return {
        ...state,
        toogleDrawer: action.payload.toogleDrawer
      };
    },
    setProfileModal: (state, action: PayloadAction<{ profileModal: boolean }>) => {
      return {
        ...state,
        profileModal: action.payload.profileModal
      };
    },
    setCreateBrothelModal: (state, action: PayloadAction<{ createBrothelModal: boolean }>) => {
      return {
        ...state,
        createBrothelModal: action.payload.createBrothelModal
      };
    },
    setCloseModals: (state) => {
      return {
        ...state,
        createChatModal: false,
        createBrothelModal: false,
        toogleDrawer: false,
        profileModal: false
      };
    }
  }
})

export default modalsReducer.reducer;
export const {
  setCloseModals,
  setCreateBrothelModal,
  setCreateChatModal,
  setProfileModal,
  setReconnectBtn,
  setToogleDrawer
} = modalsReducer.actions;




