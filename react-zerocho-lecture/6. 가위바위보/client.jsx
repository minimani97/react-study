import React from 'react';
import ReactDom from 'react-dom';
import { hot } from 'react-hot-loader/root';

import RSP from './RockScissorPaper';

const Hot =  hot(RSP);

ReactDom.render(<Hot />, document.querySelector("#root"));