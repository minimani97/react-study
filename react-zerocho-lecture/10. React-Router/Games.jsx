import React from 'react';
import { BrowserRouter, HashRouter, Route, Link } from 'react-router-dom';
import GameMatcher from './GameMatcher';

const Games = () => {
    return (
        <BrowserRouter>
            <div>
                <Link to="/game/number-baseball">숫자야구</Link>&nbsp;
                <Link to="/game/rock-scissor-paper">가위바위보</Link>&nbsp;
                <Link to="/game/lotto-generator">로또추첨기</Link>&nbsp;
                <Link to="/game/tic-tac-toe">틱택토게임</Link>&nbsp;
                <Link to="/game/mine-search">지뢰찾기</Link>
            </div>
            <div>
                {/* <Route path="/number-baseball" component={NumberBaseball} />
                <Route path="/rock-scissor-paper" component={RockScissorPaper} />
                <Route path="/lotto-generator" component={Lotto}/>
                <Route path="/tic-tac-toe" component={TicTacToe} />
                <Route path="/mine-search" component={MineSearch} /> */}
                <Route path="/game/:name" component={GameMatcher} />
            </div>
        </BrowserRouter>
    );
}

export default Games;