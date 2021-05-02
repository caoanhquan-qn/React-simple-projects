import React from "react";
class ImageCard extends React.Component {
  state = { span: 0 };
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
  }
  componentDidMount() {
    this.imageRef.current.addEventListener("load", () => {
      const numOfSpans = Math.ceil(this.imageRef.current.clientHeight / 10);
      this.setState({ span: numOfSpans });
    });
  }
  render() {
    const { urls, alt_description } = this.props.img;
    return (
      <div style={{ gridRowEnd: `span ${this.state.span}` }}>
        <img ref={this.imageRef} src={urls.regular} alt={alt_description} />
      </div>
    );
  }
}
export default ImageCard;
