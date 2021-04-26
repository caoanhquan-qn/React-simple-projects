import React from "react";

const ErrorMessage = ({ errorMessage }) => {
  return (
    <div className="season-display error">
      <h1>{errorMessage}</h1>
    </div>
  );
};

export default ErrorMessage;
