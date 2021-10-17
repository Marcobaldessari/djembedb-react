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
            <path d="M24 21.5C22.067 21.5 20.5 23.067 20.5 25C20.5 26.933 22.067 28.5 24 28.5C25.933 28.5 27.5 26.933 27.5 25C27.5 23.067 25.933 21.5 24 21.5Z" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.5 15C15.5 14.7239 15.7239 14.5 16 14.5H32C32.2761 14.5 32.5 14.7239 32.5 15V35C32.5 35.2761 32.2761 35.5 32 35.5H31.5V37C31.5 37.2761 31.2761 37.5 31 37.5H29C28.7239 37.5 28.5 37.2761 28.5 37V35.5H19.5V37C19.5 37.2761 19.2761 37.5 19 37.5H17C16.7239 37.5 16.5 37.2761 16.5 37V35.5H16C15.7239 35.5 15.5 35.2761 15.5 35V15ZM31.5 34.5V15.5H16.5V34.5H31.5Z"
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
              d="M21.2502 24.9031C21.2965 24.6688 21.502 24.5 21.7407 24.5H28.8519C29.0906 24.5 29.2961 24.6688 29.3424 24.9031L31.7127 36.9031C31.7417 37.0499 31.7035 37.2019 31.6085 37.3175C31.5135 37.433 31.3718 37.5 31.2222 37.5H19.3704C19.2208 37.5 19.0791 37.433 18.9841 37.3175C18.8891 37.2019 18.8509 37.0499 18.8799 36.9031L21.2502 24.9031ZM22.1516 25.5L19.9788 36.5H30.6138L28.441 25.5H22.1516Z"
            />
            <path d="M18.1852 11.5C17.98 11.5 17.7956 11.6254 17.7202 11.8163L16.535 14.8163C16.4742 14.9702 16.4935 15.1443 16.5866 15.2812C16.6797 15.4181 16.8345 15.5 17 15.5H33C33.1655 15.5 33.3203 15.4181 33.4134 15.2812C33.5065 15.1443 33.5259 14.9702 33.465 14.8163L32.2798 11.8163C32.2044 11.6254 32.02 11.5 31.8148 11.5H18.1852Z" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.5994 14.7009C16.6937 14.5744 16.8423 14.5 17 14.5H33C33.1578 14.5 33.3063 14.5744 33.4006 14.7009C33.495 14.8273 33.5242 14.9908 33.4794 15.142L30.9407 23.7102C30.6262 24.7718 29.6509 25.5 28.5437 25.5H21.4563C20.3492 25.5 19.3739 24.7718 19.0593 23.7102L16.5206 15.142C16.4758 14.9908 16.505 14.8273 16.5994 14.7009ZM17.6696 15.5L20.0181 23.4261C20.2068 24.0631 20.792 24.5 21.4563 24.5H28.5437C29.208 24.5 29.7932 24.0631 29.9819 23.4261L32.3304 15.5H17.6696Z"
            />
          </svg>
        </Button>
      );
    }
  }
}

export default ButtonInstrument;
