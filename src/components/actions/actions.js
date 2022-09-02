import axios from "axios";
import {
  GET_SOURCES_REQUEST,
  GET_SOURCES_SUCCESS,
  GET_SOURCES_FAIL,
  GET_NEWSLIST_REQUEST,
  GET_NEWSLIST_SUCCESS,
  GET_NEWSLIST_FAIL,
  SELECT_HEADLINE,
  ADD_FAV,
  REMOVE_FAV,
} from "../constants/constants";

const onGetSources = () => (dispatch) => {
  dispatch({ type: GET_SOURCES_REQUEST });

  var config = {
    method: "get",
    url: `${process.env.REACT_APP_API_ENDPOINT_SOURCES}?apiKey=${process.env.REACT_APP_API_KEY}`,
    headers: {},
  };

  axios(config)
    .then((response) => {
      dispatch({
        type: GET_SOURCES_SUCCESS,
        payload: response.data.sources,
      });
    })
    .catch((error) => {
      dispatch({ type: GET_SOURCES_FAIL, payload: error });
    });
};

const onGetNews = (id, sourceName) => (dispatch) => {
  dispatch({ type: GET_NEWSLIST_REQUEST });
  var config = {
    method: "get",
    url: `${process.env.REACT_APP_API_ENDPOINT_EVERYTHING}?apiKey=${process.env.REACT_APP_API_KEY}&q=${id}`,
    headers: {},
  };

  axios(config)
    .then((response) => {
      dispatch({
        type: GET_NEWSLIST_SUCCESS,
        payload: { news: response.data.articles, sourceName: sourceName },
      });
    })
    .catch((error) => {
      dispatch({ type: GET_NEWSLIST_FAIL, payload: error });
    });
};

const onSelectHeadline = (headline) => (dispatch) => {
  dispatch({ type: SELECT_HEADLINE, payload: headline });
};

const onAddFav = (item) => (dispatch) => {
  dispatch({ type: ADD_FAV, payload: item });
};

const onRemoveFav = (item) => (dispatch) => {
  dispatch({ type: REMOVE_FAV, payload: item });
};

export { onGetSources, onGetNews, onSelectHeadline, onAddFav, onRemoveFav };
