import React from "react";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  state = {
    latitude: null,
    errorMessage: "",
  };
  componentDidMount() {
    // Geolocation API
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude } = position.coords;
        this.setState({ latitude: latitude });
      },
      (error) => {
        this.setState({ errorMessage: error.message });
      }
    );
  }

  render() {
    return (
      <div>
        <SeasonDisplay
          latitude={this.state.latitude}
          errorMessage={this.state.errorMessage}
        />
      </div>
    );
  }
}
export default App;
