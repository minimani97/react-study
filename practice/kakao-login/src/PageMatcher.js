import React, { Component } from 'react';

import PurPose from './Purpose';
import Generator from './Generator';
import Login from './Login';

const PageMatcher = ({ match, history, loginInit, dispatch }) => {
    //console.log(this.props);
    const pageName = match.params.page;
    
    if(pageName === 'purpose') {
        return <PurPose />
    } else if(pageName === 'generator') {
        return <Generator />
    } else if(pageName === 'login') {
        return <Login history={history} dispatch={dispatch} loginInit={loginInit} />
    } else {
        return <div>404 : Page Not Found!</div>
    }
}

export default PageMatcher;