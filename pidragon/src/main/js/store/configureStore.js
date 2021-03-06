import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

export default function configureStore() {
  const initialState = {
    appPrefs: { lang: localStorage.getItem("lang"),
      headerName: "PI Dragon",
      codeType : 'WEB',
      debugClient: true,
      memberMenu:'MEMBER_MENU_TOP'
    },
    session: { sessionActive: false },
    status: { error: null, info: null, warn: null },
    servers: { towers: []}
  };
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk, reduxImmutableStateInvariant()))
  );
}
// user:localStorage.getItem("user")
