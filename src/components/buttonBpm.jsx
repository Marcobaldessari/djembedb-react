import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Slider from "@material-ui/core/Slider";

class ButtonBpm extends React.PureComponent {
  state = {};
  render() {
    return (
      <Slider
        defaultValue={this.props.defaultTempo}
        onChange={this.props.OnTempoChange}
        aria-labelledby="continuous-slider"
        marks
        step={10}
        min={20}
        max={360}
        valueLabelDisplay="auto"
      />
    );
  }
}

export default ButtonBpm;
