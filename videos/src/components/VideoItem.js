import React from "react";

class VideoItem extends React.Component {
  render() {
    const { thumbnails, description, title } = this.props.video.snippet;
    const { video, onVideoSelect } = this.props;
    return (
      <div className="item video-item" onClick={() => onVideoSelect(video)}>
        <img src={thumbnails.medium.url} alt={description} />
        <div className="content">
          <div className="header">{title}</div>
        </div>
      </div>
    );
  }
}
export default VideoItem;
