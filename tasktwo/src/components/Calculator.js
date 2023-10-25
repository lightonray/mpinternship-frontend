import React, { Component } from 'react';
import '../css/Calculator.css'

class Calculator extends Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        result: '',
      };
    }
  
    handleButtonClick = (value) => {
      if (value === '=') {
        try {
          const result = eval(this.state.input);
          this.setState({ result: result, input: result.toString() });
        } catch (error) {
          this.setState({ result: 'Error', input: 'Error' });
        }
      } else if (value === 'C') {
        this.setState({ input: '', result: '' });
      } else {
        this.setState((prevState) => ({
          input: prevState.input + value,
        }));
      }
    };
  
    render() {
      return (
        <div className="calculator-container">
          <h1>CALCULATOR</h1>
          <div className="calculator">
            <div className="calculator-input">
              <input
                type="text"
                value={this.state.input}
                readOnly
              />
            </div>
            <div className="calculator-buttons">
              {[7, 8, 9, 'C', 4, 5, 6, '*', 1, 2, 3, '-', 0, '.', '/', '+', '='].map((value, index) => (
                <button
                  key={index}
                  onClick={() => this.handleButtonClick(value)}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
        </div>
      );
    }
  }

  
  export default Calculator;