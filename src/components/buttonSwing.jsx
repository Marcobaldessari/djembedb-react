import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Slider from "@material-ui/core/Slider";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles({
//   root: {
//     height: 300,
//   },
// });

class ButtonSwing extends React.PureComponent {
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
          className={"sliderButton btn-topbar btn-rounded"}
        >
          <Button
            aria-label="Change bpm"
            className="btn-bpm btn-topbar btn-rounded"
            onClick={() => {
              this.toggleOpen();
            }}
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.2502 24.9031C21.2965 24.6688 21.502 24.5 21.7407 24.5H28.8519C29.0906 24.5 29.2961 24.6688 29.3424 24.9031L31.7127 36.9031C31.7417 37.0499 31.7035 37.2019 31.6085 37.3175C31.5135 37.433 31.3718 37.5 31.2222 37.5H19.3704C19.2208 37.5 19.0791 37.433 18.9841 37.3175C18.8891 37.2019 18.8509 37.0499 18.8799 36.9031L21.2502 24.9031ZM22.1516 25.5L19.9788 36.5H30.6138L28.441 25.5H22.1516Z"
              />
              <path d="M18.1852 11.5C17.98 11.5 17.7956 11.6254 17.7202 11.8163L16.535 14.8163C16.4742 14.9702 16.4935 15.1443 16.5866 15.2812C16.6797 15.4181 16.8345 15.5 17 15.5H33C33.1655 15.5 33.3203 15.4181 33.4134 15.2812C33.5065 15.1443 33.5259 14.9702 33.465 14.8163L32.2798 11.8163C32.2044 11.6254 32.02 11.5 31.8148 11.5H18.1852Z" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.5994 14.7009C16.6937 14.5744 16.8423 14.5 17 14.5H33C33.1578 14.5 33.3063 14.5744 33.4006 14.7009C33.495 14.8273 33.5242 14.9908 33.4794 15.142L30.9407 23.7102C30.6262 24.7718 29.6509 25.5 28.5437 25.5H21.4563C20.3492 25.5 19.3739 24.7718 19.0593 23.7102L16.5206 15.142C16.4758 14.9908 16.505 14.8273 16.5994 14.7009ZM17.6696 15.5L20.0181 23.4261C20.2068 24.0631 20.792 24.5 21.4563 24.5H28.5437C29.208 24.5 29.7932 24.0631 29.9819 23.4261L32.3304 15.5H17.6696Z"
              />
            </svg>
          </Button>
          <Slider
            defaultValue={this.props.defaultSwing}
            onChange={this.props.OnSwingChange}
            aria-labelledby="continuous-slider"
            // marks
            orientation="vertical"
            step={5}
            min={0}
            max={100}
            valueLabelDisplay="auto"
            className={this.getSliderClasses()}
          />
        </div>
      </React.Fragment>
    );
  }
  getSliderClasses = () => {
    let classes = "slider bpm-slider";
    return (classes += this.state.open ? " " : " hidden");
  };
}

export default ButtonSwing;
