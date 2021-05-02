import React from "react";
class SearchBar extends React.Component {
  state = { input: "" };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.input);
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="field">
            <label>Search photos</label>
            <input
              type="text"
              placeholder="Search photos..."
              value={this.state.input}
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
