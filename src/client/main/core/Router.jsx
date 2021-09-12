import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { HomePage, NotFound, ParserPage, TimerPage, WorkoutPage } from '@page';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/parser' component={ParserPage} />
            <Route exact path='/timer' component={TimerPage} />
            <Route exact path='/workout' component={WorkoutPage} />
            <Route path='*' component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;
