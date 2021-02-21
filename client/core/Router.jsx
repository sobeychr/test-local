import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { HomePage, ParserPage, SortPage } from '@page';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/parser' component={ParserPage} />
            <Route exact path='/sort' component={SortPage} />
        </Switch>
    </BrowserRouter>
);

export default Router;
