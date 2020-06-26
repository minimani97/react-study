const React = require('react');
const { useState, useRef } = React;

const WordRelay = () => {
    const [word, setWord] = useState('제로초');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef(null);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if(word[word.length - 1] === value[0]) {
            setResult("딩동댕-! 다음 단어를 입력하세요 :)");
            setWord(value);
            setValue('');
        } else {
            setResult("제시어를 다시 확인하세요! :(");
            setValue('');
        }
        inputRef.current.focus();
    };

    const onChangeInput = (e) => {
        setValue(e.currentTarget.value);
    };

    return (
        <>
            <div>{word}</div>
            <form onSubmit={onSubmitForm}>
                <input ref={inputRef} value={value} onChange={onChangeInput} />
                <button>입력</button>
            </form>
            <div>{result}</div>
        </>
    );
};

module.exports = WordRelay;