const React = require('react');
const { PureComponent } = require('react');

class Try extends PureComponent {
    render() {
        console.log('렌더링~');
        const { tryInfo } = this.props;
        return (
            <>
                <li>
                    <div>{tryInfo.try}</div>
                    <div>{tryInfo.result}</div>
                </li>
            </>
        );
    }
}

// Hooks 방식으로 작성하면 아래와 같다.
// ------------------------------------------------
// import React from 'react';
//
// const Try = ({ tryInfo }) => {
//     return (
//         <>
//             <li>
//                 <div>{tryInfo.try}</div>
//                 <div>{tryInfo.result}</div>
//             </li>
//         </>
//     );
// }
// ------------------------------------------------

module.exports = Try;