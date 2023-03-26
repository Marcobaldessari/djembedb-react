import React, { Component } from "react";
import Slider from "@material-ui/core/Slider";

class SettingsSheet extends React.PureComponent {
  state = {};

  render() {
    return (
      <React.Fragment>
        <button onClick={this.props.ToggleBottomSheet}>Open</button>
        <div className="settings-row">
          <label>Volume</label>
        </div>
        <div className="settings-row">
          <label>Tempo</label>
          <Slider
            defaultValue={this.props.defaultTempo}
            onChange={this.props.OnTempoChange}
            aria-labelledby="continuous-slider"
            orientation="horizontal"
            min={40}
            max={160}
            // step={5}
            // valueLabelDisplay="auto"
          />
        </div>
        <div className="settings-row">
          <label>Swing</label>
        </div>
        <div className="settings-row">
          <label>Instrument</label>
        </div>
        <div className="settings-row">
          <label>Dark mode</label>
        </div>
        <div className="settings-row">
          <label>Notation</label>
        </div>
      </React.Fragment>
    );
  }
}

export default SettingsSheet;
