import React from "react";
class Accordion extends React.Component {
  state = { activeIndex: 0 };
  renderList() {
    return this.props.items.map((item, index) => {
      const active = this.state.activeIndex === index ? "active" : "";
      return (
        <React.Fragment key={index}>
          <div
            onClick={() => this.setState({ activeIndex: index })}
            className={`${active} title`}
          >
            <i className="dropdown icon"></i>
            {item.title}
          </div>
          <div className={`${active} content`}>
            <p>{item.content}</p>
          </div>
        </React.Fragment>
      );
    });
  }
  render() {
    return <div className="ui styled accordion">{this.renderList()}</div>;
  }
}

export default Accordion;
