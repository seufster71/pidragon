import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default function ServiceView({currentState, fields }) {


    return (
      <div>
        <div> Services Page </div>
      </div>
    );
}

ServiceView.propTypes = {
  currentState: PropTypes.object,
	fields: PropTypes.object
};
