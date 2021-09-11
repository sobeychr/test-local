import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { HomePage, ParserPage, RowPage, TimerPage } from '@page';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/parser' component={ParserPage} />
            <Route exact path='/row' component={RowPage} />
            <Route exact path='/timer' component={TimerPage} />
        </Switch>
    </BrowserRouter>
);

export default Router;
