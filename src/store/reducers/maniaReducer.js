import {
  FETCH_CITY_LIST_SUCCESS,
  FETCH_POSITION_LIST_SUCCESS,
  GET_SEARCH_LIST_REQUEST,
  GET_SEARCH_LIST_SUCCESS
} from "../actions/maniaActions";

const initialState = {
  cityList: null,
  positionList: null,
  datalist: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CITY_LIST_SUCCESS:
      return {...state, cityList: action.data};
    case FETCH_POSITION_LIST_SUCCESS:
      return {...state, positionList: action.data};
    case GET_SEARCH_LIST_REQUEST:
      return {...state, datalist: null};
    case GET_SEARCH_LIST_SUCCESS:
      return {...state, datalist: action.data};
    default:
      return state;
  }
};


export default reducer;
