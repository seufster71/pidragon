/*
* Author Edward Seufert
*/
'use-strict';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as appPrefActions from '../core/common/apppref-actions';
import fuLogger from '../core/common/fu-logger';
import ServiceView from './service-view';


class ServiceContainer extends Component {
	constructor(props) {
		super(props);

	}

	componentDidMount() {
		//this.props.actions.initService();
	}

  render() {
			fuLogger.log({level:'TRACE',loc:'ServiceContainer::render',msg:"Hi in service"});
      return (
				<ServiceView/>
			);
  }
}

ServiceContainer.propTypes = {
	appPrefs: PropTypes.object,
	lang: PropTypes.string,
	actions: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {lang:state.lang, appPrefs:state.appPrefs};
}

function mapDispatchToProps(dispatch) {
  return { actions:bindActionCreators(appPrefActions,dispatch) };
}

export default connect(mapStateToProps,mapDispatchToProps)(ServiceContainer);
