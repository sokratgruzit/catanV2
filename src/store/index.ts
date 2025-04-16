import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import authReducer from './authReducer';
import chatReducer from './chatReducer';
import brothelReducer from './brothelReducer';
import modalsReducer from './modalsReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  chat: chatReducer,
  brothel: brothelReducer,
  modals: modalsReducer
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
