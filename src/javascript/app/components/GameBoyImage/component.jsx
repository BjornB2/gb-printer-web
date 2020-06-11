import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Decoder from '../../../tools/Decoder';
import RGBNDecoder from '../../../tools/RGBNDecoder';

class GameBoyImage extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    this.updateCanvasContent();
  }

  componentDidUpdate() {
    this.updateCanvasContent();
  }

  updateCanvasContent() {
    try {
      if (this.props.palette.palette) {
        const decoder = new Decoder();
        decoder.update(this.canvasRef.current, this.props.tiles, this.props.palette.palette, this.props.lockFrame);
      } else {
        const decoder = new RGBNDecoder();
        decoder.update(this.canvasRef.current, this.props.tiles, this.props.palette, this.props.lockFrame);
      }
    } catch (error) {
      console.error(`error in GameBoyImage: ${error.message}`);
    }
  }

  render() {
    return (
      <canvas
        className="gameboy-image"
        width={160}
        ref={this.canvasRef}
      />
    );
  }
}

GameBoyImage.propTypes = {
  tiles: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.object),
  ]).isRequired,
  palette: PropTypes.object.isRequired,
  lockFrame: PropTypes.bool.isRequired,
};

GameBoyImage.defaultProps = {};

export default GameBoyImage;
