import React, { useContext, useCallback, memo, useMemo } from 'react';
import { TableContext, CODE, OPEN_CELL, CLICK_MINE, FLAG_CELL, QUESTION_CELL, NORMALIZE_CELL } from './MineSearch';

const getTdStyle = (code) => {
    switch(code) {
        case CODE.NORMAL:
        case CODE.MINE:
            return {
                background: '#a3a1a1'
            }
        case CODE.OPENED:
            return {
                background: '#e3dede'
            }
        case CODE.CLICKED_MINE:
            return {
                background: '#bf209f'
            };
        case CODE.FLAG:
        case CODE.FLAG_MINE:
            return {
                background: '#ff4e50'
            };
        case CODE.QUESTION:
        case CODE.QUESTION_MINE:
            return {
                background: '#f9d423'
            };
        default:
            return {
                background: '#e3dede'
            }
    }
};

const getTdText = (code) => {
    switch(code) {
        case CODE.NORMAL:
            return '';
        case CODE.MINE:
            return '';
        case CODE.CLICKED_MINE:
            return '펑!';
        case CODE.FLAG:
        case CODE.FLAG_MINE:
            return '!';
        case CODE.QUESTION:
        case CODE.QUESTION_MINE:
            return '?';
        default:
            return code || '';
    }
};

const Td = memo(({ rowIndex, cellIndex }) => {
    const { tableData, halted, dispatch } = useContext(TableContext);
    
    const onClickTd = useCallback(() => {
        console.log(halted);
        if(halted) {
            return;
        }
        console.log(tableData[rowIndex][cellIndex]);
        switch(tableData[rowIndex][cellIndex]) {
            case CODE.OPENED:
            case CODE.FLAG:
            case CODE.FLAG_MINE:
            case CODE.QUESTION:
            case CODE.QUESTION_MINE:
                return;
            case CODE.NORMAL:    
                dispatch({ type: OPEN_CELL, row: rowIndex, cell: cellIndex });
                return;
            case CODE.MINE:
                dispatch({ type: CLICK_MINE, row: rowIndex, cell: cellIndex });
                return;
        }
    }, [tableData[rowIndex][cellIndex], halted]);

    const onRightClickTd = useCallback((e) => {
        e.preventDefault(); // 오른쪽 버튼 눌렀을 때 도구 메뉴가 뜨지 않도록 막기 위해서 씀

        if(halted) {
            return;
        }

        switch(tableData[rowIndex][cellIndex]) {
            case CODE.NORMAL:
            case CODE.MINE:
                dispatch({ type: FLAG_CELL, row: rowIndex, cell: cellIndex});
                return;
            case CODE.FLAG:
            case CODE.FLAG_MINE:
                dispatch({ type: QUESTION_CELL, row: rowIndex, cell: cellIndex});
                return;
            case CODE.QUESTION:
            case CODE.QUESTION_MINE:
                dispatch({ type: NORMALIZE_CELL, row: rowIndex, cell: cellIndex});
                return;
            default:
                return;
        }
    }, [tableData[rowIndex][cellIndex], halted]);

    return useMemo(() => (
        <td style={getTdStyle(tableData[rowIndex][cellIndex])} 
            onClick={onClickTd} 
            onContextMenu={onRightClickTd}
        >
            {getTdText(tableData[rowIndex][cellIndex])}
        </td>
    ), [tableData[rowIndex][cellIndex]]);
});

export default Td;