import { connect } from 'react-redux';

const mapStateToProps = (state, { shortName }) => ({
  isActive: state.activePalette === shortName,
});

const mapDispatchToProps = (dispatch, { shortName }) => ({
  setActive: () => {
    dispatch({
      type: 'PALETTE_SET_ACTIVE',
      payload: shortName,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps);
