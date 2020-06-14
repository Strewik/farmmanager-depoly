import React from "react";
// import ReactDOM from "react-dom";

class Calculations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      num1: 2,
      num2: 2
    };

    this.handlenum1Change = this.handlenum1Change.bind(this);
    this.handlenum2Change = this.handlenum2Change.bind(this);
  }
  handlenum1Change(evt) {
    console.log(evt.target.value);
    this.setState({ num1: Number(evt.target.value) });
  }
  handlenum2Change(evt) {
    console.log(typeof evt.target.value);
    this.setState({ num2: Number(evt.target.value) });
  }
  addAction = event => {
    let x = this.state.num1 + this.state.num2;
    this.setState({ result: x });
  };
  render() {
    return (
      <form>
        <label>
          <input
            type="number"
            name="num1"
            value={this.state.num1}
            onChange={this.handlenum1Change}
          />
          <input
            type="number"
            name="num2"
            value={this.state.num2}
            onChange={this.handlenum2Change}
          />
          <input type="button" onClick={this.addAction} value="Add" />
          <input type="text" value={this.state.result} readOnly />
        </label>
      </form>
    );
  }
}

export default Test;