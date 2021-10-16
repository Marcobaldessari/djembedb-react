import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class ButtonInstrument extends React.PureComponent {
  state = {};

  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.instrument == "djembe") {
      return (
        <Button
          aria-label="Switch Instrument "
          className="btn-topbar"
          onClick={this.props.OnInstrumentChange}
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.1852 10C17.7747 10 17.4059 10.2508 17.2551 10.6326L16.0716 13.6284C16.0619 13.6526 16.0532 13.6771 16.0455 13.7019C16.0177 13.7908 16.0027 13.8823 16.0003 13.9737C15.9982 14.0549 16.0059 14.1366 16.0239 14.2172C16.0292 14.2411 16.0354 14.2649 16.0425 14.2885L18.5799 22.8523C18.8684 23.8258 19.62 24.5658 20.5514 24.8605L18.3893 35.8062C18.3314 36.0997 18.4078 36.4038 18.5978 36.6349C18.7877 36.866 19.0712 37 19.3704 37H31.2222C31.5214 37 31.8049 36.866 31.9948 36.6349C32.1848 36.4038 32.2612 36.0997 32.2033 35.8062L29.9948 24.6258C30.6679 24.2535 31.1906 23.6268 31.4201 22.8523L33.9579 14.287C33.9637 14.2678 33.9688 14.2485 33.9734 14.2291C33.9785 14.2073 33.9829 14.1854 33.9866 14.1633C33.9944 14.116 33.9988 14.0681 33.9998 14.0201C34.0022 13.8998 33.9829 13.7786 33.9413 13.6625C33.937 13.6506 33.9326 13.6388 33.9279 13.627L32.7449 10.6326C32.594 10.2508 32.2253 10 31.8148 10H18.1852ZM31.5297 13L31.1347 12H18.8653L18.4703 13H31.5297ZM31.6607 15H18.3393L20.4975 22.2841C20.6233 22.7087 21.0135 23 21.4563 23H28.5437C28.9866 23 29.3767 22.7087 29.5025 22.2841L31.6607 15ZM28.0301 25H22.5625L20.5872 35H30.0054L28.0301 25Z"
            />
          </svg>
        </Button>
      );
    } else {
      return (
        <Button
          aria-label="Switch Instrument "
          className="btn-topbar"
          onClick={this.props.OnInstrumentChange}
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M24 20C21.7909 20 20 21.7909 20 24C20 26.2091 21.7909 28 24 28C26.2091 28 28 26.2091 28 24C28 21.7909 26.2091 20 24 20ZM22 24C22 22.8954 22.8954 22 24 22C25.1046 22 26 22.8954 26 24C26 25.1046 25.1046 26 24 26C22.8954 26 22 25.1046 22 24Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16 13C15.4477 13 15 13.4477 15 14V34C15 34.5523 15.4477 35 16 35V36C16 36.5523 16.4477 37 17 37H19C19.5523 37 20 36.5523 20 36V35H28V36C28 36.5523 28.4477 37 29 37H31C31.5523 37 32 36.5523 32 36V35C32.5523 35 33 34.5523 33 34V14C33 13.4477 32.5523 13 32 13H16ZM31 33H17V15H31V33Z"
              fill="white"
            />
          </svg>
        </Button>
      );
    }
  }
}

export default ButtonInstrument;
