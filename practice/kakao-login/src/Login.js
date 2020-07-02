import React from 'react';
import { Component } from 'react';
import './App.css';

class Login extends Component {
    state = {
        isOpen: false,
        isLogin: false
    }

    componentDidMount() {
        window.Kakao.init('APP_KEY');
    }

    onClickMenu = () => {
        this.setState((prevState) => {
            return {
                isOpen: !prevState.isOpen
            }
        });
    };

    loginWithKakao = () => {
        window.Kakao.Auth.login({
            success: (authObj) => {
                this.setState({
                    isLogin: true
                });
                console.log(JSON.stringify(authObj));
                alert(JSON.stringify(authObj));
            },
            fail: (err) => {
                alert(JSON.stringify(err));
            }
        });
    };

    logout = () => {
        console.log(window.Kakao.Auth.getAccessToken());
        if(!window.Kakao.Auth.getAccessToken()) {
            alert('로그인이 되어있지 않습니다!\n로그인을 해주세요:)');
            return;
        }
        window.Kakao.Auth.logout(() => {
            alert('로그아웃 되었습니다.');
            this.setState({
                isLogin: false
            })
        });
    }

    render() {
        const { isOpen, isLogin } = this.state;

        return (
            <>
                <header>
                    <label className="title">청춘예찬 한글입숨</label>
                    <div className="menu-icon" onClick={this.onClickMenu}>
                        <div className={"hambug-icon" + (isOpen ? ' active' : '')}></div>
                    </div>
                    <ul className={"sub-menu" + (isOpen ? ' active' : '')}>
                        <li>왜 사용하나요?</li>
                        <li>한글입숨 생성하기</li>
                        {(isLogin ? <li onClick={this.logout}>로그아웃</li> : <li>로그인</li>)}
                    </ul>
                </header>
                <section>
                <h4>카카오 계정으로 로그인하세요!</h4>
                <a className="kakao-login-btn" onClick={this.loginWithKakao}>
                    <img src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg" width="200" />
                </a>
            </section>
            </>
        );
    }
}

export default Login;