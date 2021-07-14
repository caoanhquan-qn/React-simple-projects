import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ selectedSong }) => {
  if (!selectedSong) {
    return <div></div>;
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {selectedSong.Title}
        <br />
        Duration: {selectedSong.Duration}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { selectedSong: state.selectedSong };
};
export default connect(mapStateToProps)(SongDetail);
