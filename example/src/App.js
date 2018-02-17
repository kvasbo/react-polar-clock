import React, { Component } from 'react';
import Polar from 'react-polar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Polar colors={{ seconds: '#FF0', minutes: '#00F', hours: '#F0F', weekday: '#0FF', month: '#0F0', date: '#F00' }} />
        <Polar size={240} colors={{ seconds: '#FF0', minutes: '#00F', hours: '#F0F', weekday: '#0FF', month: '#0F0', date: '#F00' }} />
      </div>
    );
  }
}

export default App;