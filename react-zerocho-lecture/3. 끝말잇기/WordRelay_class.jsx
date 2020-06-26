const React = require('react');
const { Component } = React;

class WordRelay extends Component {
    state = {
        word: '제로초',
        value: '',
        result: '',
    };

    onSubmitForm = (e) => {
        e.preventDefault();
        if(this.state.word[this.state.word.length - 1] === this.state.value[0]) {
            this.setState((prevState) => {
                return({
                    result: "딩동댕-! 다음 단어를 입력하세요 :)",
                    word: prevState.value,
                    value: ''
                });
            });
        } else {
            this.setState({
                result: "제시어를 다시 확인하세요! :(",
                value: ''
            });
        }
        this.input.focus();
    };

    onChangeInput = (e) => {
        this.setState({ value: e.currentTarget.value });
    };

    input;
    onRefInput = (c) => {
        this.input = c;
    };

    render() {
        return (
            <React.Fragment>
                <div>{this.state.word}</div>
                <form onSubmit={this.onSubmitForm}>
                    <input ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput} />
                    <button>입력</button>
                </form>
                <div>{this.state.result}</div>
            </React.Fragment>
        );
    }
}

module.exports = WordRelayClass;