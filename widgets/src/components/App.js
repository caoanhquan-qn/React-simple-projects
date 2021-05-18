import React from "react";
import Accordion from "./Accordion";
import Dropdown from "./Dropdown";
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";
import Translate from "./Translate";

const items = [
  {
    title: "What is React?",
    content:
      "React is a JS front-end library. It is used to show content to users and handle user events. Engineers use React to create reusable components.",
  },
  {
    title: "How do we show content with React?",
    content: "To show content, we create components",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];

class App extends React.Component {
  state = {
    selectedColor: options[0],
    currentPath: window.location.pathname,
  };
  componentDidMount() {
    window.addEventListener("popstate", this.onLocationChange);
  }
  onLocationChange = () => {
    this.setState({ currentPath: window.location.pathname });
  };

  handleColorChange = (color) => {
    this.setState({ selectedColor: color });
  };
  mapRoute() {
    if (this.state.currentPath === "/") {
      return <Accordion items={items} />;
    }
    if (this.state.currentPath === "/list") {
      return <SearchBar />;
    }
    if (this.state.currentPath === "/dropdown") {
      return (
        <Dropdown
          options={options}
          selected={this.state.selectedColor}
          handleChange={this.handleColorChange}
          label="Select color"
        />
      );
    }
    if (this.state.currentPath === "/translate") {
      return <Translate />;
    }
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <Navigation />
        {this.mapRoute()}
      </div>
    );
  }
}
export default App;
