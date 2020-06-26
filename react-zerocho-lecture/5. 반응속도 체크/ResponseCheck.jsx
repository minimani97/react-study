const React = require('react');
const { timeout } = require('async');
// const { Component } = React;
const { useState, useRef } = React;

const ResponseCheck = () => {
    const [state, setState] = useState('waiting');
    const [message, setMessage] = useState('클릭해서 시작하세요.');
    const [result, setResult] = useState([]);

    const timeout = useRef(null);
    const startTime = useRef();
    const endTime = useRef();

    const onClickScreen = () => {
        if(state === 'waiting') {
            setState('ready');
            setMessage('초록색이 되면 클릭하세요.');
            
            timeout.current = setTimeout(() => {
                setState('now');
                setMessage('지금 클릭하세요!');
            
                startTime.current = new Date();
            }, Math.floor(Math.random() * 1000) + 2000);  // 2~3초 랜덤
        } else if(state === 'ready') {
            clearTimeout(timeout.current);  // 기존의 setTimeout 초기화
            setState('waiting');
            setMessage('너무 성급하시군요! 초록색이 된 후에 클릭하세요.');
        } else if(state === 'now') {
            endTime.current = new Date();
            setState('waiting');
            setMessage('클릭해서 시작하세요.');
            setResult((prevResult) => {
                return [...prevResult, endTime.current - startTime.current];
            })
        }
    };

    const onReset = () => {
        setResult([]);
    };

    const renderAverage = () => {
        return result.length === 0
            ? null
            : <div>평균 반응시간: {result.reduce((a, c) => a + c) / result.length}ms</div>
    }

    return (
        <>
            <div id="screen" className={state} onClick={onClickScreen}>
                {message}
            </div>
            {renderAverage()}
            <button onClick={onReset}>RESET</button>
        </>
    );
}

// class ResponseCheck extends Component {
//     state = {
//         state: 'waiting',
//         message: '클릭해서 시작하세요.',
//         result: []
//     };

//     timeout;
//     startTime;
//     endTime;

//     onClickScreen = () => {
//         const { state, message, result } = this.state;
//         if(state === 'waiting') {
//             this.setState({
//                 state: 'ready',
//                 message: '초록색이 되면 클릭하세요.'
//             });
//             this.timeout = setTimeout(() => {
//                 this.setState({
//                     state: 'now',
//                     message: '지금 클릭하세요!'
//                 });
//                 this.startTime = new Date();
//             }, Math.floor(Math.random() * 1000) + 2000);  // 2~3초 랜덤
//         } else if(state === 'ready') {
//             clearTimeout(this.timeout);  // 기존의 setTimeout 초기화
//             this.setState({
//                 state: 'waiting',
//                 message: '너무 성급하시군요! 초록색이 된 후에 클릭하세요.'
//             });
//         } else if(state === 'now') {
//             this.endTime = new Date();
//             this.setState((prevState) => {
//                 return {
//                     state: 'waiting',
//                     message: '클릭해서 시작하세요',
//                     result: [...prevState.result, this.endTime - this.startTime]
//                 }
//             });
//             var time = this.endTime - this.startTime;
//         }
//     }

//     renderAverage = () => {
//         const { result } = this.state;
//         return result.length === 0
//             ? null
//             : <div>평균 반응시간: {result.reduce((a, c) => a + c) / result.length}ms</div>
//     }

//     onReset = () => {
//         this.setState({
//             result: []
//         })
//     }

//     render() {
//         const { state, message } = this.state;
//         return(
//             <>
//                 <div id="screen" className={state} onClick={this.onClickScreen}>
//                     {message}
//                 </div>
//                 {this.renderAverage()}
//                 <button onClick={this.onReset}>RESET</button>
//             </>
//         );
//     }
// }

module.exports = ResponseCheck;