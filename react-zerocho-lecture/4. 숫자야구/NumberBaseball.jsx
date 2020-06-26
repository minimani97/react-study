const React = require('react');
const { Component, useState, createRef } = require('react');
const Try = require('./Try');

// 숫자 네 개를 랜덤하게 뽑는 함수
function getNumbers() {
    const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const array = [];

    for(let i=0; i<4; i++) {
        const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
    return array;
}

class NumberBaseball extends Component {
    state = {
        result: '4자리 숫자를 입력하세요!',
        value: '',
        answer: getNumbers(),
        tries: []
    };

    onSubmitForm = (e) => {
        e.preventDefault();
        if(this.state.value === this.state.answer.join('')) {  // 정답을 맞췄을 때
            // this.setState((prevState) => {
            //     return {
            //         result: '홈런! 정답입니다:)',
            //         tries: [...prevState.tries, { try: prevState.value, result: '홈런!' }]
            //     };
            // });
            alert('홈런! 정답입니다:)');
            alert('게임을 다시 시작합니다:)');
            this.setState({
                result: '4자리 숫자를 입력하세요!',
                value: '',
                answer: getNumbers(),
                tries: []
            });
            this.inputRef.current.focus();
        } else {  // 정답이 아닐 때
            const answerArray = this.state.value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if(this.state.tries.length >= 9) {  // 10번 넘게 틀렸을 경우
                // this.setState((prevState) => {
                //     return {
                //         result: `10번의 기회 모두 틀렸기 때문에 게임 종료합니다:( 답은 ${prevState.answer.join(' ')} 였습니다!)`   
                //     };
                // });
                alert(`10번의 기회 모두 틀렸기 때문에 게임 종료합니다:( 답은 ${this.state.answer.join(' ')} 였습니다!`);
                alert('게임을 다시 시작합니다:)');
                this.setState({
                    result: '4자리 숫자를 입력하세요!',
                    value: '',
                    answer: getNumbers(),
                    tries: []
                });
                this.inputRef.current.focus();
            } else {
                for(let i=0; i<4; i++) {
                    if(answerArray[i] === this.state.answer[i]) {
                        strike += 1;
                    } else if (this.state.answer.includes(answerArray[i])) {
                        ball += 1;
                    }
                }
                this.setState((prevState) => {
                    return {
                        tries: [...prevState.tries, { try: prevState.value, result: `${strike}스트라이크, ${ball}볼` }],
                        value: ''
                    };
                });
                this.inputRef.current.focus();
            }
        }
    };

    onChangeInput = (e) => {
        console.log(this.state.answer);
        this.setState({
            value: e.target.value
        });
    };

    inputRef = createRef();

    render() {
        return (
            <>
                <h4>{this.state.result}</h4>
                <form onSubmit = {this.onSubmitForm}>
                    <input ref={this.inputRef} maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
                </form>
                <div>{10 - this.state.tries.length}번 남았습니다:)</div>
                <ol>
                    {this.state.tries.map((v, i) => {
                        return (
                            <Try key={`${i + 1}차 시도`} tryInfo={v} />
                        );
                    })}
                </ol>
            </>
        );
    }
}

// Hooks 방식으로 작성하면 아래와 같다.
// ------------------------------------------------------------------------------------------
// import React, { useState } from 'react';
// import Try from './Try';

// const NumberBaseball = () => {
//     const [result, setResult] = useState('');
//     const [value, setValue] = useState('');
//     const [answer, setAnswer] = useState(getNumbers());
//     const [tries, setTries] = useState([]);

//     onSubmitForm = (e) => {
//         e.preventDefault();
//         if(value === answer.join('')) {
//             setResult('홈런! 정답입니다:)');
//             setTries((prevTries) => {
//                 return [...prevTries, { try: value, result: '홈런!' }]
//             });
//             alert('게임을 다시 시작합니다:)');
//             setResult('4자리 숫자를 입력하세요! B)');
//             setValue('');
//             setAnswer(getNumbers());
//             setTries([]);
//         } else {
//             const answerArray = value.split('').map((v) => parseInt(v));
//             let strike = 0;
//             let ball = 0;
//             if(tries.length >= 9) {
//                 setResult((prevAnswer) => {
//                     return `10번의 기회 모두 틀렸기 때문에 게임 종료합니다:( 답은 ${prevAnswer.join(' ')} 였습니다!)`;
//                 });
//                 alert('게임을 다시 시작합니다:)');
//                 setResult('4자리 숫자를 입력하세요! B)');
//                 setValue('');
//                 setAnswer(getNumbers());
//                 setTries([]);
//             } else {
//                 for(let i=0; i<4; i++) {
//                     if(answerArray[i] === answer[i]) {
//                         strike += 1;
//                     } else if (answer.includes(answerArray[i])) {
//                         ball += 1;
//                     }
//                 }
//                 setTries((prevTries) => {
//                     return [...prevTries, { try: value, result: `${strike}스트라이크, ${ball}볼` }]
//                 });
//                 setValue('');
//             }
//         }
//     };

//     onChangeInput = (e) => {
//         // console.log(answer);
//         setValue(e.target.value);
//     };

//     return (
//         <>
//             <h1>{result}</h1>
//             <form onSubmit = {onSubmitForm}>
//                 <input maxLength={4} value={value} onChange={onChangeInput} />
//             </form>
//             <div>{10 - tries.length}번 남았습니다:)</div>
//             <ol>
//                 {tries.map((v, i) => {
//                     return (
//                         <Try key={`${i + 1}차 시도`} tryInfo={v.try} />
//                     );
//                 })}
//             </ol>
//         </>
//     );
// }
// ------------------------------------------------------------------------------------------

module.exports = NumberBaseball;