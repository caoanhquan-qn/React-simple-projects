import React from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const optionsLanguage = [
  { label: "Vietnamese", value: "vi" },
  { label: "Afrikaans", value: "af" },
  { label: "Arabic", value: "ar" },
  { label: "Hindi", value: "hi" },
];

class Translate extends React.Component {
  state = { selectedLanguage: optionsLanguage[0], text: "" };
  handleLanguageChange = (language) => {
    this.setState({ selectedLanguage: language });
  };
  handleChange = (event) => {
    this.setState({ text: event.target.value });
  };
  render() {
    return (
      <div>
        <div className="ui form">
          <div className="field">
            <label>Enter Text</label>
            <input
              type="text"
              value={this.state.text}
              onChange={this.handleChange}
            />
          </div>
        </div>

        <Dropdown
          options={optionsLanguage}
          selected={this.state.selectedLanguage}
          handleChange={this.handleLanguageChange}
          label="Select a language"
        />
        <br />
        <Convert
          language={this.state.selectedLanguage}
          text={this.state.text}
        />
      </div>
    );
  }
}

export default Translate;
