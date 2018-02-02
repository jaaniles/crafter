import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router";
import { compose } from "recompose";

import App from "../App";

export default compose(
  withRouter,
  connect(state => ({}), dispatch => bindActionCreators({}, dispatch))
)(App);
