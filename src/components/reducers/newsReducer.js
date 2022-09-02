import {
  GET_NEWSLIST_REQUEST,
  GET_NEWSLIST_SUCCESS,
  GET_NEWSLIST_FAIL,
} from "../constants/constants";

function newsReducer(state = { news: [], sourceName: "" }, action) {
  switch (action.type) {
    case GET_NEWSLIST_REQUEST:
      return { loading: true };
    case GET_NEWSLIST_SUCCESS:
      return { loading: false, news: action.payload.news, sourceName: action.payload.sourceName };
    case GET_NEWSLIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export default newsReducer;
