const createElement = ({ props, tag }) => {
    const element = document.createElement(tag);
    Object.keys(props).forEach((key) => {
        element[key] = props[key];
    });
    return element;
};

const loadCss = ({ fileLink, id }) => {
    if (!document.getElementById(id)) {
        const element = createElement({
            props: {
                id,
                href: fileLink,
                rel: 'stylesheet',
            },
            tag: 'link',
        });
        document.head.append(element);
    }
};

const removeCss = (id) => {
    if (document.getElementById(id)) {
        document.getElementById(id).remove();
    }
};

export { createElement, loadCss, removeCss };
