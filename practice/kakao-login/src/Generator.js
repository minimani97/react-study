import React, { memo, useState } from 'react';

const Generator = memo(() => {
    const [parCnt, setParCnt] = useState(1);
    const [parLng, setParLng] = useState('길게');
    const [kind, setKind] = useState('청춘예찬');

    const [contentFlg, setContentFlg] = useState(false);
    const [content, setContent] = useState('');

    const onChangeInput = (e) => {
        setParCnt(e.target.value);
    }

    const onChangeSelectLng = (e) => {
        setParLng(e.target.value);
    }

    const onChangeSelectKind = (e) => {
        setKind(e.target.value);
        console.log(e.target.value);
    }

    const onClickBtn = () => {
        setContentFlg(true);

        const content = "문단 수 "+ parCnt +"개, 문단 길이는 "+ parLng +", 텍스트 소스는 " + kind + "입니다:)";
        setContent(content);
    }

    return (
        <>
            <p className="upper-block">무의미한 한글 텍스트 생성기입니다. <strike>가 아닌 모양만 맞춰놓은 테스트 페이지라 기능 작동 안해요^,^</strike></p>
            <div className="content">
                <div className="row">
                    <div className="item">
                        <label>문단 수</label>
                        <input className="input-box" type="number" value={parCnt} min="1" max="10" onChange={onChangeInput}/>
                    </div>
                    <div className="item">
                        <label>문단 길이</label>
                        <select className="select-box" value={parLng} onChange={onChangeSelectLng}>
                            <option value="길게">길게</option>
                            <option value="중간">중간</option>
                            <option value="짧게">짧게</option>
                        </select>
                    </div>
                    <div className="item">
                        <label>텍스트 소스</label>
                        <select className="select-box" value={kind} onChange={onChangeSelectKind}>
                            <option value="청춘예찬">청춘예찬</option>
                            <option value="별헤는 밤">별헤는 밤</option>
                        </select>
                    </div>
                </div>
                <button className="btn" onClick={onClickBtn}>생성하기</button>
                {contentFlg ? <div className="result-area">{content}</div> : ''}
            </div>
        </>
    );
});

export default Generator;