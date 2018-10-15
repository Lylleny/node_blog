'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import Router from './Routers';
import './styles/style/markdown.css';

import  configureStore from './stores/store';
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
