import React, { Component } from "react";
import Slider from "@material-ui/core/Slider";

class SettingsSheet extends React.PureComponent {
  state = {};

  render() {
    return (
      <div className="settings-content">
        {/* <button onClick={this.props.ToggleBottomSheet}>Open</button> */}
        <h1>Settings</h1>
        <div className="settings-row">
          <label>Volume</label>
          <Slider
            defaultValue={this.props.defaultVolume}
            onChange={this.props.OnVolumeChange}
            valueLabelDisplay="auto"
            aria-labelledby="continuous-slider"
            min={0}
            max={100}
            orientation="horizontal"
          />
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
            valueLabelDisplay="auto"
          />
        </div>
        <div className="settings-row">
          <label>Swing</label>
          <Slider
            defaultValue={this.props.defaultSwing}
            onChange={this.props.OnSwingChange}
            aria-labelledby="continuous-slider"
            orientation="horizontal"
            min={0}
            max={50}
            valueLabelDisplay="auto"
            // className={this.getSliderClasses()}
          />
        </div>
        <div className="settings-row">
          <label>Instrument</label>
        </div>
        <div className="settings-row">
          <label>Theme</label>
        </div>
        <div className="settings-row">
          <label>Notation</label>
        </div>
      </div>
    );
  }
}

export default SettingsSheet;
