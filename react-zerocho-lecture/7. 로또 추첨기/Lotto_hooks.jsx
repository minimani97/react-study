import React, { useState, useRef, useEffect, useMemo } from 'react';
import Ball from './Ball';

function getWinNumbers() {
    console.log('getWinNumbers');

    const candidate = Array(45).fill().map((v, i) => i + 1);
    const shuffle = [];
    while(candidate.length > 0) {
        shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
    }

    const bonusNumber = shuffle[shuffle.length - 1];
    const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);

    return [...winNumbers, bonusNumber];
}

const Lotto = () => {
    const lottoNumbers = useMemo(() => getWinNumbers(), []);
    const [winNumbers, setWinNumbers] = setState(lottoNumbers);
    const [winBalls, setWinBalls] = setState([]);
    const [bonus, setBonus] = setState(null);
    const [redo, setRedo] = setState(false);
    const timeouts = useRef([]);

    useEffect(() => {
        console.log('useEffect') ;
        for(let i = 0; i < winNumbers.length-1 ; i++) { 
            timeouts.current[i] = setTimeout(() => {
                setWinBalls((prevBalls) => [...prevBalls, winNumbers[i]]);
            }, (i+1) * 1000);
        } 

        timeouts.current[6] = setTimeout(() => {
            setBonus(winNumbers[6]);
            setRedo(true);
        }, 7000);

        return () => {
            timeouts.current.forEach((v) => {
                clearTimeout(v);
            })
        }
    }, [timeouts.current]);

    const onClickRedo = () => {
        setWinNumbers(getWinNumbers());
        setWinBalls([]);
        setBonus(null);
        setRedo(false);
        timeouts.current = [];
    }

    return (
        <>
            <div>당첨 번호</div>
            <div id="result-window">
                {winBalls.map((v) => <Ball key={v} number={v} />)}
            </div>
            <div>보너스 번호!</div>
            <div>
                {bonus && <Ball number={bonus} />}
            </div>
            {redo && <button onClick={onClickRedo}>한 번 더 추첨하기</button>}
        </>
    );
}

export default Lotto;