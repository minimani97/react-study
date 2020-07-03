import React, { useState, useCallback, useContext, memo } from 'react';
import { TableContext, START_GAME } from './MineSearch';

const Form = memo(() => {
    const [row, setRow] = useState(10);
    const [cell, setCell] = useState(10);
    const [mine, setMine] = useState(20);

    const { dispatch } = useContext(TableContext);

    const onChangeRow = useCallback((e) => {
        setRow(e.target.value);
    }, []);

    const onChangeCell = useCallback((e) => {
        setCell(e.target.value);
    }, []);

    const onChangeMine = useCallback((e) => {
        setMine(e.target.value);
    }, []);

    const onClickBtn = useCallback(() => { 
        dispatch({ type: START_GAME, row, cell, mine });
    }, [row, cell, mine]);

    return (
        <div>
            <input type="number" placeholder="가로는 몇 칸으로 설정할까요?" value={row} onChange={onChangeRow}></input>
            <input type="number" placeholder="세로는 몇 칸으로 설정할까요?" value={cell} onChange={onChangeCell}></input>
            <input type="number" placeholder="지뢰는 몇 개로 설정할까요?" value={mine} onChange={onChangeMine}></input>
            <button onClick={onClickBtn}>시작!</button>
        </div>
    );
});

export default Form;