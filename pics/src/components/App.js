import React from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import unsplash from "../api/Unsplash";

class App extends React.Component {
  state = { imgs: null };
  onSearchSubmit = (input) => {
    unsplash
      .get("search/photos/", {
        params: {
          query: input,
        },
      })
      .then((data) => {
        this.setState({ imgs: data.data.results });
      })
      .catch((err) => console.log(err));
  };
  componentDidMount() {
    this.onSearchSubmit("welcome");
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.imgs} />
      </div>
    );
  }
}
export default App;
