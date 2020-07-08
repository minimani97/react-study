import React, { useEffect, memo } from 'react';

import './App.css';
import { SET_IS_LOGIN, SET_LOGIN_INIT, SET_IS_OPEN_FALSE, SET_USER_INFO } from './App';

const Login = memo(({ loginInit, dispatch, history }) => {
    useEffect(() => {
        if(!loginInit) {
            window.Kakao.init('APP_KEY');
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

                window.Kakao.API.request({
                    url: '/v2/user/me',
                    success: (res) => {
                        const info = res.kakao_account.profile;

                        // state에 user 정보 저장
                        dispatch({ type: SET_USER_INFO, name: info.nickname, profile: info.profile_image_url});
                        console.log(info);
                    },
                    fail: (error) => {
                        alert('login success, but failed to request user information: ' + JSON.stringify(error));
                    }
                });

                history.push('/');
            },
            fail: (error) => {
                alert(JSON.stringify(error));
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