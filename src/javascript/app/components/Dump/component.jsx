import React from 'react';
import PropTypes from 'prop-types';
import dummyContent from './dummy';

class Dump extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: dummyContent.join('\n'),
    };
  }

  render() {
    return (
      <>
        <div className="dump">
          <textarea
            className="dump__data"
            value={this.state.text}
            onChange={({ target }) => {
              this.setState({
                text: target.value,
              });
            }}
          />
        </div>
        <button
          className="dump__submit"
          type="button"
          onClick={() => {
            this.props.dumpPlainText(this.state.text);
          }}
        >
          Import
        </button>
      </>
    );
  }
}

Dump.propTypes = {
  dumpPlainText: PropTypes.func.isRequired,
};

Dump.defaultProps = {};

export default Dump;