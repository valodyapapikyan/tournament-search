import React from "react";
import { connect } from "react-redux";

import { loaderStatus } from "ducks/search";

import "styles/preloader.css";

class Preloader extends React.Component {
  render() {
    return this.props.preloaderStatus ? (
      <div className="spinner">
        <svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
          <circle
            className="length"
            fill="none"
            strokeLinecap="round"
            cx="33"
            cy="33"
            r="28"
          />
        </svg>
        <svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
          <circle
            fill="none"
            strokeWidth="8"
            strokeLinecap="round"
            cx="33"
            cy="33"
            r="28"
          />
        </svg>
        <svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
          <circle
            fill="none"
            strokeWidth="8"
            strokeLinecap="round"
            cx="33"
            cy="33"
            r="28"
          />
        </svg>
        <svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
          <circle
            fill="none"
            strokeWidth="8"
            strokeLinecap="round"
            cx="33"
            cy="33"
            r="28"
          />
        </svg>
      </div>
    ) : null;
  }
}

export default connect(state => ({
  preloaderStatus: loaderStatus(state)
}))(Preloader);
