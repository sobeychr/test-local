const appendFileLink = ({ id, props, tag }) => {
    if (!document.getElementById(id)) {
        const element = createElement({
            props: {
                ...props,
                id,
            },
            tag,
        });
        document.head.append(element);
    }
};

const createElement = ({ props, tag }) => {
    const element = document.createElement(tag);
    Object.keys(props).forEach((key) => {
        element[key] = props[key];
    });
    return element;
};

const loadCss = ({ fileLink, id }) =>
    appendFileLink({
        id,
        props: {
            href: fileLink,
            rel: 'stylesheet',
        },
        tag: 'link',
    });

const loadJs = ({ fileLink, id }) =>
    appendFileLink({
        id,
        props: {
            src: fileLink,
            type: 'text/javascript',
        },
        tag: 'script',
    });

const removeFileLink = (id) => {
    if (document.getElementById(id)) {
        document.getElementById(id).remove();
    }
};

export { appendFileLink, createElement, loadCss, removeFileLink };
