import React from 'react';
import { render } from 'react-dom';

const App = () => (
    <div>
        <header>some header</header>
        <main>some content</main>
        <footer>some footer</footer>
    </div>
);

render(<App />, document.getElementById('root'));
