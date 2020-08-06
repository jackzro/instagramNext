import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import postReducer from "./reducers/postReducer";

const reducer = combineReducers({
  postReducer,
});
export default function initializeStore(initialState = {}) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
}
// const store = createStore(reducer, applyMiddleware(thunk));

// export default store;
