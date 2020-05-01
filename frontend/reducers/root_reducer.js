import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import entitiesReducer from './entities_reducer';
import errorsReducer from './errors_reducer';

const rootReducer = combineReducers({
  session: sessionReducer, // login, logout
  entities: entitiesReducer, // users, servers
  errors: errorsReducer // session, servers
});

export default rootReducer;