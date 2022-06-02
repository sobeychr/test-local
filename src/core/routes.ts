import { lazy } from 'solid-js';

const Download = lazy(() => import('@page/Download'));
const Home = lazy(() => import('@page/Home'));
const Parser = lazy(() => import('@page/Parser'));
const Timer = lazy(() => import('@page/Timer'));

const routes = [
    { path: '/', component: Home },
    { path: '/download', component: Download },
    { path: '/parser', component: Parser },
    { path: '/Timer', component: Timer },
];

export default routes;
