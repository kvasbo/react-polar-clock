import React from 'react';
import PropTypes from 'prop-types';
import Clock from './clock';

class PolarClock extends React.Component {

  componentDidMount() {
    const colors = { ...defaultColors, ...this.props.colors };
    this.clock = new Clock(this._canvas, (this.props.size / 2), colors, this.props.interval);
  }
  
  render() {
    return (
      <canvas ref={(c) => this._canvas = c} height={this.props.size} width={this.props.size} style={{ backgroundColor: this.props.backgroundColor }} />
    );
  }
}

const defaultColors = { 
  seconds: "#444",
  minutes: "#555",
  hours: "#666",
  weekday: "#777",
  date: "#888",
  month: "#999" 
}


PolarClock.defaultProps = {
  backgroundColor: "#000000",
  size: 300,
  colors: {
  },
  interval: 25
}

PolarClock.propTypes = {
  backgroundColor: PropTypes.string,
  size: PropTypes.number,
  colors: PropTypes.object,
  interval: PropTypes.number,
}

export default PolarClock;