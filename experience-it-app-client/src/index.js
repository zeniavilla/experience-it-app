import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import store from './store.js';

ReactDOM.render(
    <Provider store={store} >
        <App/>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();