import { applyMiddleware, combineReducers, createStore } from "redux";
import rotateReducer from "../reducers/reducers";
import { compose } from "redux";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose



const rootReducer = combineReducers({
    cart: rotateReducer
})

const store = createStore(
    rootReducer, 
    composeEnhancer(applyMiddleware())

)
export default store;