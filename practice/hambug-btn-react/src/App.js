import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const onClickMenu = () => {
        setIsOpen((prevIsOpen) => {
            return !prevIsOpen
        });
    };

    return (
        <div className="App">
            <header>
                <label className="title">햄버거 버튼 실습</label>
                <div className="menu-icon" onClick={onClickMenu}>
                    <div className={"hambug-icon" + (isOpen? ' active' : '')}></div>
                </div>
                <ul className={"sub-menu" + (isOpen ? ' active' : '')}>
                    <li>서브메뉴1</li>
                    <li>서브메뉴2</li>
                    <li>서브메뉴3</li>
                    <li>서브메뉴4</li>
                </ul>
            </header>
        </div>
    );
}

export default App;
