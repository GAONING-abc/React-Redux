import React from "react";
import {render} from "react-dom";
import {applyMiddleware,createStore} from "redux";
import {Provider} from "react-redux";
import reducer from "./reducer.js"
import App from "./App.js";
import logger from 'redux-logger';


let store = createStore(reducer,applyMiddleware(logger));

render(
    <Provider store={store}>
        <App></App>
    </Provider>,
    document.querySelector("#container")
)
