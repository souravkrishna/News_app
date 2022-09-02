import {
  GET_SOURCES_FAIL,
  GET_SOURCES_REQUEST,
  GET_SOURCES_SUCCESS,
} from "../constants/constants";

function sourceReducer(state = { source: [] }, action) {
  switch (action.type) {
    case GET_SOURCES_REQUEST:
      return { loading: true };
    case GET_SOURCES_SUCCESS:
      return { loading: false, source: action.payload };
    case GET_SOURCES_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export default sourceReducer;
