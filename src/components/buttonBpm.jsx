import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Slider from "@material-ui/core/Slider";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles({
//   root: {
//     height: 300,
//   },
// });

class ButtonBpm extends React.PureComponent {
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
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.3953 16.5L27.4591 21.8067L22.932 30.2144L14.7453 30.2144L22.6632 16.5C23.0481 15.8333 24.0104 15.8333 24.3953 16.5ZM25.2613 16L28.0164 20.7719L29.5012 18.0143C29.1269 17.72 28.8864 17.2631 28.8864 16.75C28.8864 15.8624 29.606 15.1428 30.4936 15.1428C31.3812 15.1428 32.1007 15.8624 32.1007 16.75C32.1007 17.6376 31.3812 18.3571 30.4936 18.3571C30.4799 18.3571 30.4663 18.3569 30.4527 18.3566L28.604 21.7898L34.7876 32.5C35.5574 33.8333 34.5951 35.5 33.0555 35.5H14.003C12.4634 35.5 11.5011 33.8333 12.2709 32.5L21.7972 16C22.567 14.6667 24.4915 14.6667 25.2613 16ZM24.0677 30.2144L28.0468 22.8246L32.3133 30.2144L24.0677 30.2144Z"
              />
            </svg>
          </Button>
          <Slider
            defaultValue={this.props.defaultTempo}
            onChange={this.props.OnTempoChange}
            aria-labelledby="continuous-slider"
            // marks
            orientation="vertical"
            // step={5}
            min={40}
            max={160}
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

export default ButtonBpm;
