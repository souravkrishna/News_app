import { createStore, combineReducers, applyMiddleware } from "redux";
import sourceReducer from "./reducers/sourceReducer";
import newsReducer from "./reducers/newsReducer";
import thunk from "redux-thunk";
import headlineReducer from "./reducers/headlineReducer";
import favReducer from "./reducers/favReducer";

const fav = localStorage.getItem("favNews");

const initialState = {
  Source: { source: [] },
  News: { news: [], sourceName: "" },
  Headline: { headline: {} },
  Fav: { fav: fav === "undefined" ? [] : JSON.parse(fav) },
};

const reducer = combineReducers({
  Source: sourceReducer,
  News: newsReducer,
  Headline: headlineReducer,
  Fav: favReducer,
});

const store = createStore(reducer, initialState, applyMiddleware(thunk));

export default store;
