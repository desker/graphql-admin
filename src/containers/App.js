import React from "react";
import { connect } from "react-redux";
import "../stylesheets/main.scss";

class App extends React.Component {
  componentWillMount() {
    this.props.dispatch({type: 'USERS_FETCH_LIST'});
  }

  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
}

export default connect(() => ({}))(App);
