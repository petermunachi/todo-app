import { combineReducers, configureStore } from '@reduxjs/toolkit';
import webAppReducer from 'ducks';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import thunkMiddleware from 'redux-thunk';

const combinedReducer = combineReducers({
  webApp: webAppReducer,
});

const masterReducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    return {
      ...state, // use previous state
      ...action.payload, // new state
    };
  } else return combinedReducer(state, action);
};

export const makeStore = () =>
  configureStore({
    reducer: masterReducer,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore['dispatch'];
export type RootStateT = ReturnType<AppStore['getState']>;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootStateT> = useSelector;

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
