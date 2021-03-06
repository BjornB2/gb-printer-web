import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import SVG from '../SVG';
import supportsWebmWriter from '../../../tools/supportsWebmWriter';

const BATCH_ACTIONS = [
  'download',
  'delete',
  'edit',
];

if (supportsWebmWriter()) {
  BATCH_ACTIONS.push('animate');
}

const BatchButtons = (props) => (
  <ul className="batch-buttons">
    <li
      className={
        classnames('batch-buttons__action', {
          'batch-buttons__action--disabled': !props.enableFilter,
          'batch-buttons__action--enabled': props.enableFilter,
        })
      }
    >
      <button
        type="button"
        onClick={props.filter}
        disabled={!props.enableFilter}
      >
        <SVG name="filter" />
      </button>
    </li>
    <li
      className={
        classnames('batch-buttons__action batch-buttons__action--enabled', {
          'batch-buttons__action--has-unselected': props.hasUnselected,
        })
      }
    >
      <button
        type="button"
        onClick={() => props.batchTask(props.hasUnselected ? 'checkall' : 'uncheckall', props.page)}
      >
        <SVG name="checkmark" />
      </button>
    </li>
    {
      BATCH_ACTIONS.map((action) => (
        <li
          key={action}
          className={
            classnames('batch-buttons__action', {
              'batch-buttons__action--disabled': !props.enabled,
              'batch-buttons__action--enabled': props.enabled,
            })
          }
        >
          <button
            disabled={!props.enabled}
            type="button"
            onClick={() => props.batchTask(action, props.page)}
          >
            <SVG name={action} />
          </button>
        </li>
      ))
    }
  </ul>
);

BatchButtons.propTypes = {
  batchTask: PropTypes.func.isRequired,
  enabled: PropTypes.bool.isRequired,
  enableFilter: PropTypes.bool.isRequired,
  filter: PropTypes.func.isRequired,
  hasUnselected: PropTypes.bool.isRequired,
  page: PropTypes.number.isRequired,
};

BatchButtons.defaultProps = {
};

export default BatchButtons;
