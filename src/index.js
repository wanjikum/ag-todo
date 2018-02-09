// console.log("Hello this is my first react redux application");
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configReducer from './js/store/configStore.js';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes.js';
// import './styles/styles.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import configureStore from './js/store/configStore.js';

const store = configureStore();

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById("app")
);


