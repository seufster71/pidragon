
import React, { Component } from "react";
import { render } from "react-dom";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { initPublic } from "./core/common/apppref-actions";
import { sessionCheck } from "./member/session/session-actions";
import PageContainer from "./PageContainer.js";
import Bootstrap from "bootstrap/dist/css/bootstrap.css";
import Theme from "./theme.css";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

const store = configureStore();
store.dispatch(initPublic());
//store.dispatch(sessionCheck());

window.onbeforeunload = () => {
  localStorage.setItem("lang", store.getState().appPrefs.lang);
  //if (store.getState().member.user != null) {
  //  localStorage.setItem("user", JSON.stringify(store.getState().member.user));
  //}
};

//class App extends Component {
//   constructor() {
//     super();
//   }

//   render() {
//     return <PageContainer />;
//   }
//}

render(
  <Provider store={store}>
    <BrowserRouter>
      <PageContainer />
    </BrowserRouter>
  </Provider>,
  document.getElementById("app")
);

export function getDebugClient() {
  let state = store.getState();
  return state.appPrefs.debugClient;
}
export function getHost() {
  return "";
}
