import React, { useEffect, memo } from 'react';

import './App.css';
import { SET_IS_LOGIN, SET_LOGIN_INIT, SET_IS_OPEN_FALSE } from './App';

const Login = memo(({ loginInit, dispatch, history }) => {
    useEffect(() => {
        if(!loginInit) {
            window.Kakao.init('2c98faedb93ac20b0922ca71f3dc61e9');
            dispatch({ type: SET_LOGIN_INIT });
        }
    }, []);

    const loginWithKakao = () => {
        window.Kakao.Auth.login({
            success: (authObj) => {
                dispatch({ type: SET_IS_LOGIN });
                console.log(JSON.stringify(authObj));
                alert('로그인되었습니다.');
                dispatch({ type: SET_IS_OPEN_FALSE });
                history.push('/');
            },
            fail: (err) => {
                alert(JSON.stringify(err));
            }
        });
    };

    return (
        <>
            <h4 className="upper-block">카카오 계정으로 로그인하세요!</h4>
            <a className="kakao-login-btn" onClick={loginWithKakao}>
                <img src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg" width="200" />
            </a>
        </>
    );
});

export default Login;