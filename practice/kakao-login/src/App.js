import React, { useReducer, memo } from 'react';
import { Route, Link, Switch, BrowserRouter } from 'react-router-dom';

import PageMatcher from './PageMatcher';

import './App.css';
import Main from './Main';

const initialState = {
    isOpen: false,
    isLogin: false,
    loginInit: false
};

export const SET_IS_OPEN = 'SET_IS_OPEN';
// export const SET_IS_OPEN_TRUE = 'SET_IS_OPEN_TRUE';
export const SET_IS_OPEN_FALSE = 'SET_IS_OPEN_FALSE';
export const SET_IS_LOGIN = 'SET_IS_LOGIN';
export const SET_LOGIN_INIT = 'SET_LOGIN_INIT';

const reducer = (state, action) => {
    switch(action.type) {
        case SET_IS_OPEN:
            return {
                ...state,
                isOpen: !state.isOpen
            }
        // case SET_IS_OPEN_TRUE:
        //     return {
        //         ...state,
        //         isOpen: true
        //     }
        case SET_IS_OPEN_FALSE:
            return {
                ...state,
                isOpen: false
            }
        case SET_IS_LOGIN:
            return {
                ...state,
                isLogin: !state.isLogin
            }
        case SET_LOGIN_INIT:
            return {
                ...state,
                loginInit: !state.loginInit
            }
        default:
            return state;
    }
}

const App = memo(() => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { isOpen, isLogin, loginInit } = state;

    const onClickMenu = () => {
        dispatch({ type: SET_IS_OPEN });
    };

    const logout = () => {
        console.log(window.Kakao.Auth.getAccessToken());
        if (!window.Kakao.Auth.getAccessToken()) {
            alert('로그인이 되어있지 않습니다!\n로그인을 해주세요:)');
            return;
        }
        window.Kakao.Auth.logout(() => {
            alert('로그아웃 되었습니다.');
            dispatch({ type: SET_IS_LOGIN });
            dispatch({ type: SET_IS_OPEN_FALSE });
        });
    };

    return (
        <BrowserRouter>
            <header>
                <label className="title">
                    <Link to="/">한글입숨</Link>
                </label>
                <div className="menu-icon" onClick={onClickMenu}>
                    <div className={"hambug-icon" + (isOpen ? ' active' : '')}></div>
                </div>
                <ul className={"sub-menu" + (isOpen ? ' active' : '')}>
                    <Link to="/test/purpose"><li>왜 사용하나요?</li></Link>
                    <Link to="/test/generator"><li>한글입숨 생성하기</li></Link>
                    {(isLogin ? <li onClick={logout}>로그아웃</li> : <Link to="/test/login"><li>로그인</li></Link>)}
                </ul>
            </header>
            <section>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/test/:page" render={(props) => <PageMatcher {...props} dispatch={dispatch} loginInit={loginInit} />} />
                </Switch>
            </section>
        </BrowserRouter>
    );
});

export default App;
