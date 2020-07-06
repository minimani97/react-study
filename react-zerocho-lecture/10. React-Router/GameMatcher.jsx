import React, { Component } from 'react';

import NumberBaseball from '../4. 숫자야구/NumberBaseball';
import RockScissorPaper from '../6. 가위바위보/RockScissorPaper';
import Lotto from '../7. 로또 추첨기/Lotto';
import TicTacToe from '../8. 틱택토게임/TicTacToe';
import MineSearch from '../9. 지뢰찾기/MineSearch';

class GameMatcher extends Component {
    render() {
        const name = this.props.match.params.name;
        console.log(this.props);

        if(name === 'number-baseball') {
            return <NumberBaseball />
        } else if(name === 'rock-scissor-paper') {
            return <RockScissorPaper />
        } else if(name === 'lotto-generator') {
            return <Lotto />
        } else if(name === 'tic-tac-toe') {
            return <TicTacToe />
        } else if(name === 'mine-search'){
            return <MineSearch />
        }
        return (
            <div>Game Not Found</div>
        ); 
    }
}

export default GameMatcher;