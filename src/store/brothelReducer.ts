import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BrothelState } from "../types/interfaces";

const INIT_STATE: BrothelState = {
  //Start of brothel state
  _id: "",
  numberOfPlayers: 0,
  brothelName: "",
  isActive: false,
  isDemo: false,
  betAmount: 0,
  players: [],
  isPublic: true,
  password: "",
  slots: [],
  settlments: [],
  roads: [],
  cards: {},
  devCards: [],
  dice: "static",
  diceNumber1: 0,
  diceNumber2: 0,
  brothelAdmin: [],
  initTimer: false,
  //End of brothel state
  position: {
    left: 0,
    top: 0,
  },
  allBrothelData: [],
  gameStarted: true,
};

const brothelReducer = createSlice({
  name: "brothel",
  initialState: INIT_STATE,
  reducers: {
    setBrothelData: (state, action: PayloadAction<{ updatedState: BrothelState }>) => {
      return {
        ...state,
        ...action.payload.updatedState,
      };
    },
    setKnightPosition: (state, action: PayloadAction<BrothelState>) => {
      return {
        ...state,
        position: action.payload.position,
      };
    },
    getAllBrothels: (state, action: PayloadAction<BrothelState>) => {
      return {
        ...state,
        allBrothelData: action.payload.allBrothelData,
      };
    },
    setGameStarted: (state, action: PayloadAction<BrothelState>) => {
      return {
        ...state,
        gameStarted: action.payload.gameStarted,
      };
    },
  },
});

export default brothelReducer.reducer;
export const {
  setBrothelData,
  setKnightPosition,
  getAllBrothels,
  setGameStarted,
} = brothelReducer.actions;
