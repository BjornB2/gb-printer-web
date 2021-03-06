import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import SVG from '../SVG';

const APConfig = (props) => (
  <div
    className={
      classnames('wifi-settings__ap-group', {
        'wifi-settings__ap-group--delete': props.delete,
      })
    }
  >
    <div className="settings__inputgroup">
      <label
        htmlFor={`${props.id}-settings-ap-ssid`}
        className="settings__label"
      >
        Network SSID
      </label>
      <input
        id={`${props.id}-settings-ap-ssid`}
        className="settings__input"
        type="text"
        value={props.ssid}
        readOnly={!props.isNew}
        disabled={!props.isNew}
        onChange={({ target }) => {
          props.update({
            ssid: target.value,
          });
        }}
      />
      <button
        type="button"
        className="settings__button wifi-settings__button wifi-settings__button--delete"
        onClick={() => {
          props.update({
            delete: !props.delete,
          });
        }}
      >
        <SVG name="delete" />
      </button>
    </div>
    <div className="settings__inputgroup">
      <label
        htmlFor={`${props.id}-settings-ap-psk`}
        className="settings__label"
      >
        Network Password
      </label>
      <input
        id={`${props.id}-settings-ap-psk`}
        className="settings__input"
        type="password"
        placeholder="••••••••"
        value={props.psk || ''}
        onChange={({ target }) => {
          props.update({
            psk: target.value,
          });
        }}
      />
    </div>
  </div>
);

APConfig.propTypes = {
  id: PropTypes.string.isRequired,
  ssid: PropTypes.string.isRequired,
  isNew: PropTypes.bool.isRequired,
  delete: PropTypes.bool.isRequired,
  psk: PropTypes.string.isRequired,
  update: PropTypes.func.isRequired,
};

export default APConfig;
