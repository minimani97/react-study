import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import wrapper from '../store/configureStore';

import 'antd/dist/antd.css';

const NodeBird = ({ Component }) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>NodeBird</title>
            </Head>
            <Component />
        </>
    )
};

NodeBird.propTypes = { 
    Component: PropTypes.elementType.isRequried
}

export default wrapper.withRedux(NodeBird);