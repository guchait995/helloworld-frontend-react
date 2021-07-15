
import { createStore } from 'redux'
import EmployeeReducer from './employeeReducer'; 


export const store = createStore(EmployeeReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(() => console.log(store.getState()))

export const RootState = store.getState

export const AppDispatch = store.dispatch
