import styled, { createGlobalStyle } from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';

export const Overlay = styled.div`
    position: fixed;
    z-index: 5000;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

export const Header = styled.header`
    height: 44px;
    background: white;
    potition: relative;
    padding: 0;
    text-align: center;

    // Header 안의 h1 태그(선택) -> 이렇게 하면 각각의 변수명을 짓는 고통에서 벗어날 수 있어^ㅡ^,,
    & h1 { 
        margin: 0;
        font-size: 17px;
        color: #333;
        line-height: 44px;
    }
`;

export const CloseButton = styled(CloseOutlined)`
    position: absolute;
    right: 0;
    top: 0;
    padding: 15px;
    line-height: 14px;
    cursor: pointer;
    font-size: 28px;
    color: white;

    z-index: 5050;
`;

export const SlickWrapper = styled.div`
    // height: calc(100% - 44px);
    height: 100%;
    background: #000000c9;
`;

export const ImageWrapper = styled.div`
    padding: 32px;
    text-align: center;

    & img {
        margin: 0 auto;
        max-height: 750px;
    }
`;

export const Indicator = styled.div`
    text-align: center;

    & > div {
        width: 72px;
        height: 25px;
        border-radius: 15px;
        background: #4c4b4b;
        display: inline-block;
        text-align: center;
        color: white;
        font-size: 15px;
    }
`;

export const PrevArrow = styled.div`
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-left: solid 3px currentColor;
    border-top: solid 3px currentColor;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    color: white;

    top: 50%;
    left: 20px;
    z-index: 5050;
`;

export const NextArrow = styled.div`
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-bottom: solid 3px currentColor;
    border-right: solid 3px currentColor;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    color: white;

    top: 50%;
    right: 20px;
    z-index: 5050;
`;

// 스타일이 원래 정해져 있던 클래스(ex. slick-slide)의 스타일을 재정의하기 위해 createGlobalStyle 사용!
export const Global = createGlobalStyle`
    .slick-slide {
        display: inline-block;
    }
`;