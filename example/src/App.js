import React, { Component } from 'react';
import Polar from 'react-polar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Polar colors={{ seconds: '#FF0', minutes: '#00F' }} />
      </div>
    );
  }
}

export default App;