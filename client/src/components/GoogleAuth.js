import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "109337435070-iud9mq2ddvp9s95ap2sr8vdquu1l0gf7.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn();
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn === true) {
      return (
        <button
          className="waves-effect waves-light btn"
          onClick={this.onSignOutClick}
        >
          <i className="material-icons left">redo</i> Sign out
        </button>
      );
    } else {
      return (
        <button
          className="waves-effect waves-light btn"
          onClick={this.onSignInClick}
        >
          <i className="material-icons left">person</i> Sign in
        </button>
      );
    }
  }

  render() {
    return <span>{this.renderAuthButton()}</span>;
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);
