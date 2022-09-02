import { SELECT_HEADLINE } from "../constants/constants";

function headlineReducer(state = { headline: {} }, action) {
  switch (action.type) {
    case SELECT_HEADLINE:
      return { headline: action.payload };
    default:
      return state;
  }
}

export default headlineReducer;
