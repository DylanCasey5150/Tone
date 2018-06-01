import React, { Component } from "react";
import "./Tone_Update_Option.css";

const constraints = {
  video: true
};

class Tone_Update_Option extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coordinates: {
        x: 0,
        y: 0
      },
      isRecording: true
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { canvas: prevCanvas } = prevState;
    //const prevIsRecording = prevState.isRecording;
    const { canvas, context } = this.state;

    if (!prevCanvas && canvas) {
      context.drawImage(this.player, 0, 0, canvas.width, canvas.height);
    }
  }

  onButtonClick = () => {
    const { isRecording } = this.state;
    this.setState({
      isRecording: !this.state.isRecording
    });
  };

  videoRef = node => {
    if (!node) {
      return;
    }
    this.player = node;
    navigator.mediaDevices.getUserMedia(constraints).then(stream => {
      node.srcObject = stream;
    });
  };
  canvasFunction = node => {
    if (!node) {
      this.setState({
        context: null,
        canvas: null
      });
      return;
    }
    this.setState({
      context: node.getContext("2d"),
      canvas: node
    });
  };
  //onClick = () => {
  //  alert(event.pageX + " " + event.pageY);
  //};
  colorStripClick = e => {
    this.setState(
      {
        coordinates: {
          x: e.screenX,
          y: e.screenY
        }
      },
      () => {
        //this function gets the image data
        const pixelData = this.state.context.getImageData(
          this.state.coordinates.x,
          this.state.coordinates.y,
          1,
          1
        );
        alert(
          this.state.coordinates.x +
            " " +
            this.state.coordinates.y +
            " " +
            pixelData.data[0] +
            " " +
            pixelData.data[1] +
            " " +
            pixelData.data[2] +
            " " +
            pixelData.data[3]
        );
      }
    );
  };

  setRecordingState = isRecording => {
    this.setState({ isRecording });
  };

  render() {
    const { isRecording } = this.state;
    //const isRecording = this.state.isRecording;

    const video = isRecording ? (
      <video ref={this.videoRef} id="player" autoplay controls />
    ) : null;

    const canvas = isRecording ? null : (
      <canvas
        onClick={this.colorStripClick}
        ref={this.canvasFunction}
        id="canvas"
        width={500}
        height={400}
      />
    );

    const buttonText = isRecording ? "Capture" : "Go Back";

    return (
      <div className="Tone_Update_Option">
        {video}
        {canvas}
        <button onClick={this.onButtonClick} id="capture">
          {buttonText}
        </button>
      </div>
    );
  }
}

export default Tone_Update_Option;
