import React from "react";

class Dropdown extends React.Component {
  state = { open: false };
  componentDidMount() {
    document.body.addEventListener("click", this.handleBodyClick);
  }
  componentWillUnmount() {
    document.body.removeEventListener("click", this.handleBodyClick);
  }
  handleBodyClick = () => {
    this.setState({ open: false });
  };
  renderColor() {
    return this.props.options
      .filter((color) => color !== this.props.selected)
      .map((color) => {
        return (
          <div
            key={color.value}
            className="item"
            onClick={() => this.props.handleChange(color)}
          >
            {color.label}
          </div>
        );
      });
  }
  renderText() {
    if (this.props.label === "Select color") {
      return (
        <p style={{ color: this.props.selected.value }}>
          This text is {this.props.selected.value}
        </p>
      );
    } else {
      return null;
    }
  }
  render() {
    const { selected, label } = this.props;
    return (
      <div className="ui form">
        <div className="field">
          <label htmlFor="colors">{label}</label>
          <div
            onClick={(e) => {
              e.stopPropagation();
              this.setState({ open: !this.state.open });
            }}
            className={`ui selection dropdown ${
              this.state.open ? "visible active" : ""
            }`}
          >
            <i className="dropdown icon"></i>
            <div className="text">{selected.label}</div>
            <div
              className={`menu ${this.state.open ? "visible transition" : ""}`}
            >
              {this.renderColor()}
            </div>
          </div>
        </div>
        {this.renderText()}
      </div>
    );
  }
}

export default Dropdown;
