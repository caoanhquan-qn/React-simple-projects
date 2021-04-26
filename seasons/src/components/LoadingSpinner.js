import React from "react";
const LoadingSpinner = ({ message }) => {
  return (
    <div className="season-display ui segment">
      <div className="ui active dimmer">
        <h1 className="ui text loader">{message}</h1>
      </div>
    </div>
  );
};

LoadingSpinner.defaultProps = {
  message: "Loading...",
};
export default LoadingSpinner;
