





import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './Store/Store';

import App from './Containers/App';

export default class Root extends Component {
    render() {
        return (
            <Provider store = {store} >
                <App />
            </Provider>
        )
    }
}