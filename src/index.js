import React from 'react';
import ReactDOM from 'react-dom';
import {ConnectedRouter} from 'connected-react-router';
import {Provider} from "react-redux";
import {NotificationContainer} from "react-notifications";
import 'react-notifications/lib/notifications.css';
import './index.css'

import * as serviceWorker from './serviceWorker';
import store, {history} from "./store/configureStore";
import App from './App';

const app = (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
            <NotificationContainer/>
        </ConnectedRouter>
    </Provider>
);
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
