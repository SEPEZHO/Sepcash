
// import {DispatchAction, InitialState, exchangeReducer} from "./ExchangeReducer";
// import {createStore} from "redux";


// export const store = createStore<InitialState, DispatchAction, null, null>(exchangeReducer);

import { createStore } from 'redux'
import { exchangeReducer, initialState } from './ExchangeReducer'

export const store = createStore(exchangeReducer, initialState)
