import {combineReducers, createStore} from 'redux'
import dialogsReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"
import userReducer from './usersReducer';


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersData: userReducer,
});

let store = createStore(reducers);

export default store