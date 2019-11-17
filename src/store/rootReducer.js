import {combineReducers} from "redux";
import {connectRouter} from 'connected-react-router';

import maniaReducer from './reducers/maniaReducer';

export default history => {
  return combineReducers({
    router: connectRouter(history),
    mania: maniaReducer,
  });
}
