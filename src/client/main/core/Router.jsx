import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { Diablo2Page, HomePage, NotFound, ParserPage, TimerPage, WorkoutPage } from '@page';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/diablo2' component={Diablo2Page} />
            <Redirect from='/d2' to='/diablo2' />
            <Route exact path='/parser' component={ParserPage} />
            <Route exact path='/timer' component={TimerPage} />
            <Route exact path='/workout' component={WorkoutPage} />
            <Route path='*' component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;
