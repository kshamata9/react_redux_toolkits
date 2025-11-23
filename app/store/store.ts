import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import counterReducer from '../features/counterSlice'
import postsReducer from '../features/postsSlice';
import numbersReducer from '../features/numberSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer:{
        users: userReducer,
        counter: counterReducer,
        posts: postsReducer,
        numbers: numbersReducer,
    },
    middleware: (getDefault) => getDefault({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga)
// Types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
