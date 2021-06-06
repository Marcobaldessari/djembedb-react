import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Slider from "@material-ui/core/Slider";

class ButtonVolume extends React.PureComponent {
  state = {};

  toggleOpen = () => {
    if (this.state.open) {
      document.removeEventListener("mousedown", this.handleClickOutside);
      this.setState(() => ({
        open: false,
      }));
    } else {
      document.addEventListener("mousedown", this.handleClickOutside);
      this.setState(() => ({
        open: true,
      }));
    }
  };
  constructor(props) {
    super(props);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      // alert("You clicked outside of me!");
      this.toggleOpen();
    }
  }

  render() {
    return (
      <React.Fragment>
        <div
          ref={this.setWrapperRef}
          class={"sliderButton btn-topbar btn-rounded"}
        >
          <Button
            aria-label="Change volume"
            className="btn-bpm btn-topbar btn-rounded"
            onClick={() => {
              this.toggleOpen();
            }}
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M25.5 15.6771C25.5 15.2985 25.0954 15.0572 24.7623 15.2373L18.1875 18.7903C17.9684 18.9087 17.7234 18.9707 17.4744 18.9707H14C13.7239 18.9707 13.5 19.1945 13.5 19.4707V27.5295C13.5 27.8056 13.7239 28.0295 14 28.0295H17.4744C17.7234 28.0295 17.9684 28.0915 18.1875 28.2098L24.7623 31.7629C25.0954 31.9429 25.5 31.7017 25.5 31.323V15.6771ZM24.2869 14.3575C25.2863 13.8174 26.5 14.5411 26.5 15.6771V31.323C26.5 32.459 25.2863 33.1827 24.2869 32.6426L17.7121 29.0896C17.639 29.0501 17.5574 29.0295 17.4744 29.0295H14C13.1716 29.0295 12.5 28.3579 12.5 27.5295V19.4707C12.5 18.6422 13.1716 17.9707 14 17.9707H17.4744C17.5574 17.9707 17.639 17.95 17.7121 17.9105L24.2869 14.3575ZM28.5 19C28.5 18.7239 28.7239 18.5 29 18.5C30.0211 18.5 30.9074 19.053 31.5213 19.8716C32.1351 20.69 32.5 21.7977 32.5 23C32.5 24.2023 32.1351 25.31 31.5213 26.1284C30.9074 26.947 30.0211 27.5 29 27.5C28.7239 27.5 28.5 27.2761 28.5 27C28.5 26.7239 28.7239 26.5 29 26.5C29.6358 26.5 30.2495 26.1576 30.7213 25.5284C31.1933 24.8991 31.5 24.0068 31.5 23C31.5 21.9932 31.1933 21.1009 30.7213 20.4716C30.2495 19.8424 29.6358 19.5 29 19.5C28.7239 19.5 28.5 19.2761 28.5 19ZM29 15.5C28.7239 15.5 28.5 15.7239 28.5 16C28.5 16.2761 28.7239 16.5 29 16.5C31.968 16.5 34.5 19.3351 34.5 23C34.5 26.6649 31.968 29.5 29 29.5C28.7239 29.5 28.5 29.7239 28.5 30C28.5 30.2761 28.7239 30.5 29 30.5C32.6594 30.5 35.5 27.067 35.5 23C35.5 18.933 32.6594 15.5 29 15.5Z" />
            </svg>
          </Button>
          <Slider
            defaultValue={this.props.defaultVolume}
            onChange={this.props.OnVolumeChange}
            valueLabelDisplay="auto"
            aria-labelledby="continuous-slider"
            min={0}
            max={100}
            orientation="vertical"
            className={this.getSliderClasses()}
          />
        </div>
      </React.Fragment>
    );
  }

  getSliderClasses = () => {
    let classes = "slider volume-slider";
    return (classes += this.state.open ? " " : " hidden");
  };
}

export default ButtonVolume;
