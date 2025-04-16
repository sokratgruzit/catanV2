import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChatState, Chat } from '../types/interfaces';

const INIT_STATE: ChatState = {
  chatData: [],
  selectedChat: undefined,
  toogleBoxes: false
};

const chatReducer = createSlice({
  name: "chat",
  initialState: INIT_STATE,
  reducers: {
    setChatData: (state, action: PayloadAction<{ chatData: any[] }>) => {
      return {
        ...state,
        chatData: action.payload.chatData
      };
    },
    setToogleBoxes: (state, action: PayloadAction<{ toogleBoxes: boolean }>) => {
      return {
        ...state,
        toogleBoxes: action.payload.toogleBoxes
      };
    },
    setSelectedChat: (state, action: PayloadAction<{ selectedChat: Chat }>) => {
      return {
        ...state,
        selectedChat: action.payload.selectedChat
      };
    }
  }
})

export default chatReducer.reducer;
export const {
  setChatData,
  setToogleBoxes,
  setSelectedChat
} = chatReducer.actions;
