import React, { Component } from 'react';

const rspCoords = {
    rock: '0',
    scissor: '-250px',
    paper: '-530px'
}

const scores = {
    scissor: 1,
    rock: 0,
    paper: -1
}

const computerChoice = (imgCoord) => {
    return Object.entries(rspCoords).find(function(v) {
        return v[1] === imgCoord;
    })[0];
}

class RockScissorPaper extends Component {
    state = {
        result: '',
        score: 0,
        imgCoord: '0'
    };

    interval;
    timeout;

    changeHand = () => {
        const { imgCoord } = this.state;

        if(imgCoord === rspCoords.rock) {
            this.setState({
                imgCoord: rspCoords.scissor
            });
        } else if(imgCoord === rspCoords.scissor) {
            this.setState({
                imgCoord: rspCoords.paper
            });
        } else if(imgCoord === rspCoords.paper) {
            this.setState({
                imgCoord: rspCoords.rock
            });
        }
    };

    componentDidMount() {
        this.interval = setInterval(this.changeHand, 130);
    }

    componentWillUnmount() {
         clearInterval(this.interval);
    }

    onClickBtn = (choice) => () => {
        const { imgCoord } = this.state;

        clearInterval(this.interval);
        clearTimeout(this.timeout);

        const myScore = scores[choice];
        const cpuScore = scores[computerChoice(imgCoord)];
        const diff = myScore - cpuScore;

        if(diff === 0) {
            this.setState({
                result: '비겼습니다!'
            });
        } else if([-1, 2].includes(diff)) {
            this.setState((prevState) => {
                return {
                    result: '이겼습니다!',
                    score: prevState.score + 1
                }
            });
        } else {
            this.setState((prevState) => {
                return {
                    result: '졌습니다!',
                    score: prevState.score - 1
                }
            });
        }
        this.timeout = setTimeout(() => {
            this.interval = setInterval(this.changeHand, 130);
        }, 1000);
    }

    render() {
        const { result, score, imgCoord } = this.state;

        return (
            <>
                <div id="computer" style={{ background: `url(https://data.ac-illust.com/data/thumbnails/4f/4f63b32d7d43ea2cb231c0724200cf8e_t.jpeg) ${imgCoord} 0` }}></div>
                <div>
                    <button id="rock" className="btn" onClick={this.onClickBtn('rock')}>바위</button>
                    <button id="scissor" className="btn" onClick={this.onClickBtn('scissor')}>가위</button>
                    <button id="paper" className="btn" onClick={this.onClickBtn('paper')}>보</button>
                </div>
                <div>{result}</div>
                <div>현재까지 {score}점:)</div>
            </>
        );
    }
}

export default RockScissorPaper;