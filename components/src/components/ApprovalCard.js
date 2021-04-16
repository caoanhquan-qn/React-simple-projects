import React from "react";
class ApprovalCard extends React.Component {
  render() {
    return (
      <div className="ui card">
        <div className="content">
          {/* Are you sure you want to continue? */}
          {this.props.children}
        </div>
        <div className="extra content">
          <div className="ui two buttons">
            <button className="ui basic green button">Accept</button>
            <button className="ui basic red button">Decline</button>
          </div>
        </div>
      </div>
    );
  }
}
export default ApprovalCard;
