import { ADD_FAV, REMOVE_FAV } from "../constants/constants";

function favReducer(state = { fav: [] }, action) {
  switch (action.type) {
    case ADD_FAV:
      if (state.fav.length === 0) {
        localStorage.setItem("favNews", JSON.stringify[action.payload]);
        return { fav: [action.payload] };
      } else {
        let titles = state.fav.map((item) => item.title);
        if (!titles.includes(action.payload.title)) {
          localStorage.setItem(
            "favNews",
            JSON.stringify([...state.fav, action.payload])
          );
          return { fav: [...state.fav, action.payload] };
        }
      }
      break;
    case REMOVE_FAV:
      localStorage.setItem(
        "favNews",
        JSON.stringify(
          state.fav.filter((item) => item.title !== action.payload.title)
        )
      );
      return {
        fav: state.fav.filter((item) => item.title !== action.payload.title),
      };
    default:
      return state;
  }
}

export default favReducer;
