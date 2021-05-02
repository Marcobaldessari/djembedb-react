import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Slider from "@material-ui/core/Slider";

class ButtonVolume extends React.PureComponent {
  state = {};
  render() {
    return (
      <Slider
        defaultValue={this.props.defaultVolume}
        onChange={this.props.OnVolumeChange}
        valueLabelDisplay="auto"
        aria-labelledby="continuous-slider"
        min={0}
        max={100}
      />
    );
  }
}

export default ButtonVolume;
