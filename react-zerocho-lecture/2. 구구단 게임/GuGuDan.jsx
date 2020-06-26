const React = require('react');
const { useState, useRef } = React;

const GuGuDan = () => {
    const [first, setFirst] = /*React.*/useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = /*React.*/useState(Math.ceil(Math.random() * 9));         
    const [value, setValue] = /*React.*/useState('');
    const [result, setResult] = /*React.*/useState('');
    const inputRef = /*React.*/useRef(null);

    const onChangeInput = (e) => {
        setValue(e.target.value);
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        if(parseInt(value) === first * second) {
            setResult(value + ', 딩동댕-!');
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
            setValue('');
        } else {
            setResult('땡-!');
            setValue('');
        }
        inputRef.current.focus();
    }

    return (
        <>
            <div>{first} X {second} ?</div>
            <form onSubmit={onSubmitForm}>
                <input ref={inputRef} type="number" value={value} onChange={onChangeInput}/>
                <button type="submit">입력</button>  
            </form>
            <div>{result}</div>
        </>
    );
};

module.exports = GuGuDan;