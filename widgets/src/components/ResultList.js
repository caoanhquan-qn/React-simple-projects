import React from "react";

class ResultList extends React.Component {
  renderList() {
    return this.props.results.map((result, index) => {
      return (
        <div key={index} className="ui celled list">
          <div className="item">
            <div className="right floated content">
              <a
                href={`https://en.wikipedia.org?curid=${result.pageid}`}
                className="ui button primary"
              >
                Go
              </a>
            </div>
            <div className="header">{result.title}</div>
            {result.snippet
              .replaceAll(`<span class="searchmatch">`, "")
              .replaceAll("</span>", "")}
          </div>
        </div>
      );
    });
  }
  render() {
    return <div>{this.renderList()}</div>;
  }
}
export default ResultList;
