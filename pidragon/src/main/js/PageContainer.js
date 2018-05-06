import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Switch, Route, withRouter} from "react-router-dom";
import NavigationView from "./coreView/navigation/navigation-view";
import LoginContainer from "./core/usermanagement/login-container";
import StatusView from "./coreView/status/status-view";
import MemberContainer from "./member/member-container";
import PublicContainer from "./public/public-container";
import AccessDeniedContainer from "./core/usermanagement/accessdenied-container";
import { bindActionCreators } from "redux";
import fuLogger from './core/common/fu-logger';

class PageContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    fuLogger.log({level:'TRACE',loc:'PageContainer::render',msg:"page "+ this.props.history.location.pathname});
    if (this.props.session.sessionActive == true) {
     return (
      <Switch>
        <Route exact path="/" component={MemberContainer}/>
        <Route path="/member" component={MemberContainer}/>
        <Route path="/access-denied" component={AccessDeniedContainer} />
        <Route path="/member-servers" component={MemberContainer}/>
        <Route path="/member-profile" component={MemberContainer}/>
        <Route path="/member-logout" component={MemberContainer}/>
      </Switch>

      );
    } else {
      return (
        <div>
        <NavigationView appPrefs={this.props.appPrefs} activeTab={this.props.history.location.pathname}
          menus={this.props.appMenus.PUBLIC_MENU_RIGHT} />
         <StatusView />
          <Switch>
            <Route exact path="/" component={PublicContainer}/>
            <Route path="/login" component={LoginContainer}/>
          </Switch>
        </div>
      );
    }
  }
}

PageContainer.propTypes = {
  appPrefs: PropTypes.object.isRequired,
  appMenus: PropTypes.object,
  lang: PropTypes.string,
  actions: PropTypes.object,
  session: PropTypes.object,
  history: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {
    appMenus: state.appMenus,
    lang: state.lang,
    appPrefs: state.appPrefs,
    navigation: state.navigation,
    session:state.session
  };
}

export default withRouter(connect(mapStateToProps)(PageContainer));
