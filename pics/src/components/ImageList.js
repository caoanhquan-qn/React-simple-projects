import React from "react";
import ImageCard from "./ImageCard";
class ImageList extends React.Component {
  renderList() {
    if (!this.props.images) {
      return <div></div>;
    }
    return this.props.images.map((image) => {
      return <ImageCard img={image} key={image.id} />;
    });
  }
  render() {
    return <div className="image-list">{this.renderList()}</div>;
  }
}
export default ImageList;
