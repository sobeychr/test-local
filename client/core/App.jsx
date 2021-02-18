import React, { useEffect } from 'react';
import { Provider } from 'react-redux';

import Router from './Router';
import Store from '@store';
import { onAppInit } from '@store/action/app';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style';

const App = () => {
    useEffect(() => {
        Store.dispatch(onAppInit());
    }, []);

    return (
        <Provider store={Store}>
            <Router />
        </Provider>
    );
};

export default App;
