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

  // componentDidMount() {
  //   document.addEventListener("mousedown", this.handleClickOutside);
  // }

  // componentWillUnmount() {
  //   document.removeEventListener("mousedown", this.handleClickOutside);
  // }

  /**
   * Set the wrapper ref
   */
  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  /**
   * Alert if clicked on outside of element
   */
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
              <path d="M32.8906 29.2144L33.9216 31C34.3065 31.6667 33.8253 32.5 33.0555 32.5H14.003C13.2332 32.5 12.7521 31.6667 13.137 31L14.1679 29.2144L32.8906 29.2144ZM32.3133 28.2144L28.0468 20.8246L24.0677 28.2144L32.3133 28.2144ZM22.932 28.2144L27.4591 19.8067L24.3953 14.5C24.0104 13.8333 23.0481 13.8333 22.6632 14.5L14.7453 28.2144L22.932 28.2144ZM25.2613 14L28.0164 18.7719L29.5012 16.0143C29.1269 15.72 28.8864 15.2631 28.8864 14.75C28.8864 13.8624 29.606 13.1428 30.4936 13.1428C31.3812 13.1428 32.1007 13.8624 32.1007 14.75C32.1007 15.6376 31.3812 16.3571 30.4936 16.3571C30.4799 16.3571 30.4663 16.3569 30.4527 16.3566L28.604 19.7898L34.7876 30.5C35.5574 31.8333 34.5951 33.5 33.0555 33.5H14.003C12.4634 33.5 11.5011 31.8333 12.2709 30.5L21.7972 14C22.567 12.6667 24.4915 12.6667 25.2613 14Z" />
            </svg>
          </Button>
          <Slider
            defaultValue={this.props.defaultTempo}
            onChange={this.props.OnTempoChange}
            aria-labelledby="continuous-slider"
            // marks
            orientation="vertical"
            step={10}
            min={20}
            max={360}
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
