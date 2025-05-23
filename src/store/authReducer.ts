import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from '../types/interfaces';

const INIT_STATE: AuthState = {
  username: '',
  address: '123333333333333333333333333',
  access_token: '',
  roles: '',
  avatar: 'avatar.jpg',
  _id: '',
  email: 'tavadzed@gmail.com',
  gameStarted: false,
  isConnected: false,
  providerType: '',
  chainId: '',
  otpEnabled: false,
  connectionError: '',
  balance: 0,
  demoBalance: 0,
  triedReconnect: false,
  verified: false,
  switchAccount: false,
};

const authReducer = createSlice({
  name: "auth",
  initialState: INIT_STATE,
  reducers: {
    login: (state, action: PayloadAction<{ player: AuthState }>) => {
      return {
        ...state,
        ...action.payload.player
      };
    },
    logout: (state) => {
      return {
        ...state,
        username: '',
        access_token: '',
        roles: '',
        avatar: '',
        _id: '',
        email: '',
        gameStarted: false,
        address: '',
        isConnected: false,
        providerType: '',
        chainId: '',
        otpEnabled: false,
        connectionError: '',
        balance: 0,
        demoBalance: 0,
        triedReconnect: false,
        verified: false,
        switchAccount: false,
      };
    },
    setNewAccessToken: (state, action: PayloadAction<{ access_token: string }>) => {
      return {
        ...state,
        access_token: action.payload.access_token,
      };
    },
    setOtpEnabled: (state, action: PayloadAction<{ otpEnabled: boolean }>) => {
      return {
        ...state,
        otpEnabled: action.payload.otpEnabled
      };
    },
    setAccount: (state, action: PayloadAction<{ switchAccount: boolean }>) => {
      return {
        ...state,
        switchAccount: action.payload.switchAccount
      };
    },
    setUpdateState: (state, action: PayloadAction<{ updatedState: AuthState }>) => {
      return {
        ...state,
        ...action.payload.updatedState
      };
    },
    setConnectionError: (state, action: PayloadAction<{ connectionError: string }>) => {
      return {
        ...state,
        connectionError: action.payload.connectionError
      };
    },
    setTriedReconnect: (state, action: PayloadAction<{ triedReconnect: boolean }>) => {
      return {
        ...state,
        triedReconnect: action.payload.triedReconnect
      };
    }
  }
})

export default authReducer.reducer;
export const {
  login,
  logout,
  setNewAccessToken,
  setAccount,
  setUpdateState,
  setConnectionError,
  setOtpEnabled,
  setTriedReconnect
} = authReducer.actions;
