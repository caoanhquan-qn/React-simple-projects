import React from "react";
import VideoItem from "./VideoItem";

class VideoList extends React.Component {
  renderVideos() {
    return this.props.videos.map((video) => {
      return (
        <VideoItem
          video={video}
          onVideoSelect={this.props.onVideoSelect}
          key={video.id.videoId}
        />
      );
    });
  }
  render() {
    return <div className="ui relaxed divided list">{this.renderVideos()}</div>;
  }
}

export default VideoList;
