import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import App from "./components/app";
import reducers from "./reducers";
import {Provider} from 'react-redux';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
