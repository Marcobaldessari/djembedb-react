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
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.0115 17.0017C15.0027 17.0712 12 19.2735 12 23.4633C12 23.7394 11.7761 23.9633 11.5 23.9633C11.2239 23.9633 11 23.7394 11 23.4633C11 18.6714 14.4973 16.0826 17.9885 16.002C19.7299 15.9617 21.487 16.543 22.812 17.7942C24.1433 19.0513 25 20.9483 25 23.4633C25 27.9641 28.0296 30.271 31.0106 30.3344C32.5103 30.3663 34.0002 29.8317 35.115 28.7159C36.2261 27.6038 37 25.8782 37 23.4633C37 23.1871 37.2239 22.9633 37.5 22.9633C37.7761 22.9633 38 23.1871 38 23.4633C38 26.1006 37.1489 28.095 35.8225 29.4227C34.4998 30.7466 32.7397 31.3714 30.9894 31.3342C27.4704 31.2594 24 28.514 24 23.4633C24 21.1871 23.2317 19.5659 22.1255 18.5213C21.013 17.4707 19.5201 16.9668 18.0115 17.0017Z" />
              <path d="M33.5 24.0149C33.5 25.3956 32.3807 26.5149 31 26.5149C29.6193 26.5149 28.5 25.3956 28.5 24.0149C28.5 22.6342 29.6193 21.5149 31 21.5149C32.3807 21.5149 33.5 22.6342 33.5 24.0149Z" />
              <path d="M20.5 23.0149C20.5 24.3956 19.3807 25.5149 18 25.5149C16.6193 25.5149 15.5 24.3956 15.5 23.0149C15.5 21.6342 16.6193 20.5149 18 20.5149C19.3807 20.5149 20.5 21.6342 20.5 23.0149Z" />
            </svg>
          </Button>
          <Slider
            defaultValue={this.props.defaultSwing}
            onChange={this.props.OnSwingChange}
            aria-labelledby="continuous-slider"
            // marks
            orientation="vertical"
            // step={5}
            min={0}
            max={50}
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
