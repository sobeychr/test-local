import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { HomePage } from '@page';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={HomePage} />
        </Switch>
    </BrowserRouter>
);

export default Router;
