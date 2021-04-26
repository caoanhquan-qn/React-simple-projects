import React from "react";
import WinterDisplay from "./WinterDisplay";
import SummerDisplay from "./SummerDisplay";
import LoadingSpinner from "./LoadingSpinner";
import ErrorMessage from "./ErrorMessage";

const renderCurrentSeason = (latitude, currentMonth) => {
  /* 
  latitude >0 => northern hemisphere
  latitude <0 => southern hemisphere

  Northern Hemisphere:
  from April to September: summer
  the rest: winter
  
  Southern Hemisphere:
  from April to September: winter
  the rest: summer
   */

  // Northern Hemisphere and it's winter
  if (latitude > 0 && (currentMonth <= 3 || currentMonth >= 10)) {
    return <WinterDisplay />;
  }
  // Northern Hemisphere and it's summer
  if (latitude > 0 && currentMonth >= 4 && currentMonth <= 9) {
    return <SummerDisplay />;
  }
  // Southern Hemisphere and it's winter
  if (latitude < 0 && currentMonth >= 4 && currentMonth <= 9) {
    return <WinterDisplay />;
  }
  // Southern Hemisphere and it's summer
  if (latitude < 0 && (currentMonth <= 3 || currentMonth >= 10)) {
    return <SummerDisplay />;
  }
};

const renderError = (errorMessage) => {
  return <ErrorMessage errorMessage={errorMessage} />;
};

const renderUI = (errorMessage, latitude, currentMonth) => {
  if (errorMessage && !latitude) {
    return renderError(errorMessage);
  } else if (latitude && !errorMessage) {
    return renderCurrentSeason(latitude, currentMonth);
  } else {
    return <LoadingSpinner message="Please accept location request" />;
  }
};

const SeasonDisplay = ({ latitude, errorMessage }) => {
  const currentMonth = new Date().getMonth() + 1;

  return (
    <React.Fragment>
      {renderUI(errorMessage, latitude, currentMonth)}
    </React.Fragment>
  );
};

export default SeasonDisplay;
