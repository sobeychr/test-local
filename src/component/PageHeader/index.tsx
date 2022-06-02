import createEmotion from '@emotion/css/create-instance';
import type { Component } from 'solid-js';
import styles from './styles.scss';

const { css } = createEmotion({ key: 'page-header' });
css(styles);

const PageHeader:Component = () => {
    return <header>
        lorem
        <div>ipsum</div>
    </header>;
};

export default PageHeader;
