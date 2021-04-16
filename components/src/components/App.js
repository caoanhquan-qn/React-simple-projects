import React from "react";
import Comment from "./Comment";
import ApprovalCard from "./ApprovalCard";
import faker from "faker";

class App extends React.Component {
  render() {
    return (
      <div className="ui container comments" style={{ marginTop: "10px" }}>
        <h3 className="ui dividing header">Comments</h3>
        {/* passing props */}
        <ApprovalCard>
          <Comment
            author="Alex"
            content="Great blog post"
            time={new Date()}
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>
        <ApprovalCard>
          <Comment
            author="Sam"
            content="Informative. Thanks"
            time={new Date("February 7, 2021")}
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>
        <ApprovalCard>
          <Comment
            author="Jane"
            content="Looks great"
            time={new Date("March 30, 2020")}
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>
      </div>
    );
  }
}
export default App;
