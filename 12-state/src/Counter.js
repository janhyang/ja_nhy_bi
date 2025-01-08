//State 실습 #1

import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleIncrease = () => {
    this.setState(prevState => ({
      count: prevState.count + 2
    }));
  };

  handleDecrease = () => {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  };

  render() {
    return (
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md">
        <h2 className="text-xl font-bold mb-4">Counter: {this.state.count}</h2>
        <div className="space-x-4">
          <button 
            onClick={this.handleIncrease}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            +2
          </button>
          <button 
            onClick={this.handleDecrease}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            -1
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;


//State 실습 #2