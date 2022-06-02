import { injectGlobal } from '@emotion/css';
import { Router, useRoutes } from 'solid-app-router';
import type { Component } from 'solid-js';
import PageHeader from '@component/PageHeader';
import routes from './routes';
import styles from './styles.scss';

injectGlobal(styles);

const App:Component = () => {
    const Routes = useRoutes(routes);
    return <Router>
        <PageHeader />
        <Routes/>
    </Router>;
};

export default App;
