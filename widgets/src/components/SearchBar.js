import React from "react";
import ResultList from "./ResultList";
import wikipedia from "../api/Wikipedia";

class SearchBar extends React.Component {
  state = { input: "", results: [] };
  componentDidMount() {
    wikipedia
      .get("", {
        params: {
          srsearch: "vietnam",
        },
      })
      .then((data) => this.setState({ results: data.data.query.search }))
      .catch((err) => console.log(err));
  }
  onSearchSubmit(term) {
    if (!term) {
      return;
    }
    wikipedia
      .get("", {
        params: {
          srsearch: term,
        },
      })
      .then((data) => {
        this.setState({ results: data.data.query.search });
      })
      .catch((err) => console.log(err));
  }
  handleChange = (event) => {
    this.setState({ input: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.onSearchSubmit(this.state.input);
  };
  render() {
    return (
      <React.Fragment>
        <div className="ui segment">
          <form onSubmit={this.handleSubmit} className="ui form">
            <div className="field">
              <label>Search</label>
              <input
                type="text"
                placeholder="Search on Wikipedia..."
                value={this.state.input}
                onChange={this.handleChange}
              />
            </div>
          </form>
        </div>
        <ResultList results={this.state.results} />
      </React.Fragment>
    );
  }
}
export default SearchBar;
