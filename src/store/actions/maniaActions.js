export const FETCH_CITY_LIST_REQUEST = "FETCH_CITY_LIST_REQUEST";
export const FETCH_CITY_LIST_SUCCESS = "FETCH_CITY_LIST_SUCCESS";
export const FETCH_CITY_LIST_FAILURE = "FETCH_CITY_LIST_FAILURE";

export const fetchCityListRequest = () => ({type: FETCH_CITY_LIST_REQUEST});
export const fetchCityListSuccess = data => ({type: FETCH_CITY_LIST_SUCCESS, data});
export const fetchCityListFailure = error => ({type: FETCH_CITY_LIST_FAILURE, error});

export const FETCH_POSITION_LIST_REQUEST = "FETCH_POSITION_LIST_REQUEST";
export const FETCH_POSITION_LIST_SUCCESS = "FETCH_POSITION_LIST_SUCCESS";
export const FETCH_POSITION_LIST_FAILURE = "FETCH_POSITION_LIST_FAILURE";

export const fetchPositionListRequest = () => ({type: FETCH_POSITION_LIST_REQUEST});
export const fetchPositionListSuccess = data => ({type: FETCH_POSITION_LIST_SUCCESS, data});
export const fetchPositionListFailure = error => ({type: FETCH_POSITION_LIST_FAILURE, error});

export const GET_SEARCH_LIST_REQUEST = "GET_SEARCH_LIST_REQUEST";
export const GET_SEARCH_LIST_SUCCESS = "GET_SEARCH_LIST_SUCCESS";
export const GET_SEARCH_LIST_FAILURE = "GET_SEARCH_LIST_FAILURE";

export const getSearchListRequest = params => ({type: GET_SEARCH_LIST_REQUEST, params});
export const getSearchListSuccess = data => ({type: GET_SEARCH_LIST_SUCCESS, data});
export const getSearchListFailure = error => ({type: GET_SEARCH_LIST_FAILURE, error});