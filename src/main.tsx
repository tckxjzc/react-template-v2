import React from 'react';
import {render} from 'react-dom';
import App from "./App";
/**
 * styles
 */
import 'styles/base.global.scss';
// import 'tz-library/style/base.scss';
// import 'tz-library/style/mobile.media.scss';

/**
 * start
 */
render(<App/>,
    document.getElementById('container'));
