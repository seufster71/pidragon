
export default function memberReducer(state = {}, action) {
  switch(action.type) {
    case 'LOAD_INIT': {
      if (action.responseJson != null && action.responseJson.params != null && action.responseJson.params.USER != null) {
        return Object.assign({}, state, {user:action.responseJson.params.USER});
      } else {
        return state;
      }
    }
    case 'PROCESS_LOGOUT': {
      return Object.assign({}, state, {user:null});
    }
    default:
        return state;
    }
}
