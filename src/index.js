import React from 'react';
import ReactDOM from 'react-dom';
// import { ConnectedRouter } from 'react-router-redux';


import Root from './components/root';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';

import store from './reducers/index';


ReactDOM.render(
<Provider store={store}>
    <Root/>
</Provider>,
document.getElementById('root'));


serviceWorker.unregister();
