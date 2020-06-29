const React = require('react');
const { PureComponent } = require('react');

class Header extends PureComponent {
    state = {
        isOpen: false
    };

    onClickBtn = () => {
        this.setState((prevState) => {
            return {
                isOpen: !prevState.isOpen
            }
        });
    }

    render() {
        const { isOpen } = this.state;

        return(
            <>
                <header>
                    <label className="title">햄버거 버튼 실습</label>
                    <div className="menu-icon" onClick={this.onClickBtn}>
                        <div className={"hambug-icon" + (isOpen ? ' active' : '')}></div>
                    </div>
                    <ul className={"sub-menu" + (isOpen ? ' active' : '')}>
                        <li>서브메뉴1</li>
                        <li>서브메뉴2</li>
                        <li>서브메뉴3</li>
                        <li>서브메뉴4</li>
                    </ul>
                </header>
            </>
        );
    }
}

module.exports = Header;