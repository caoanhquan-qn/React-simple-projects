import React from "react";

class Comment extends React.Component {
  render() {
    // receiving props
    const { author, content, time, avatar } = this.props;
    return (
      <div className="comment">
        <a className="avatar" href="/">
          <img className="ui avatar image" alt="avatar" src={avatar} />
        </a>
        <div className="content">
          <a className="author" href="/">
            {author}
          </a>
          <div className="metadata">
            <span className="date">
              {new Intl.DateTimeFormat("en-AU").format(time)}
            </span>
          </div>
          <div className="text">{content}</div>
        </div>
      </div>
    );
  }
}
export default Comment;
