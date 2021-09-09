import React from 'react';
import ReactDOM from 'react-dom';

const rootDiv = document.getElementById('nav-root');

const NavApp = () => <React.StrictMode><div>nav ttt</div></React.StrictMode>;

if(rootDiv) {
    ReactDOM.render(<NavApp />
    , document.getElementById('nav-root'));

    if (import.meta.hot) {
        import.meta.hot.accept();
    }
}

const containers = [];

window.renderNav = containerId => {
    const element = document.getElementById(containerId);
    if(element) {
        ReactDOM.render(<NavApp />, element);
        containers.push(containerId);
    }
};

window.unmountNav = containerId => {
    const element = document.getElementById(containerId);
    const index = containers.find(id => id === containerId);
    if(element && index) {
        ReactDOM.unmountComponentAtNode(element);
        containers.splice(index, 1);
    }
};

window.unmountAllNav = () => {
    containers.forEach(containerId => {
        const element = document.getElementById(containerId);
        if(element) {
            ReactDOM.unmountComponentAtNode(element);
        }
    })
};
