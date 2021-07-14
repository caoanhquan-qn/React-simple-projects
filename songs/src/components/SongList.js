import React from "react";
import { connect } from "react-redux";
import { selectedSong } from "../actions";

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map((song, index) => {
      return (
        <div className="item" key={index}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectedSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.Title}</div>
          <div className="content">{song.Duration}</div>
        </div>
      );
    });
  }
  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps, { selectedSong: selectedSong })(
  SongList
);
