import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/Youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], video: null };
  componentDidMount() {
    youtube
      .get("/search", {
        params: {
          q: "Viet Nam",
        },
      })
      .then((data) => {
        this.setState({ videos: data.data.items });
        return this.setState({ video: data.data.items[0] });
      })
      .catch((err) => console.log(err));
  }
  onSearchSubmit = (input) => {
    youtube
      .get("/search", {
        params: {
          q: input,
        },
      })
      .then((data) => {
        this.setState({ videos: data.data.items });
        return this.setState({ video: data.data.items[0] });
      })
      .catch((err) => console.log(err));
  };
  renderVideo = (selectedVideo) => {
    this.setState({ video: selectedVideo });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.video} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.renderVideo}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
