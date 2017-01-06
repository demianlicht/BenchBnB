import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          username: "",
          password: ""
      };
      this.updateUsername = this.updateUsername.bind(this);
      this.updatePassword = this.updatePassword.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.redirect = this.redirect.bind(this);
  }

  componentDidMount() {
    if(this.props.loggedIn) { this.redirect(); }
  }

  updateUsername(e) {
    this.setState({ username: e.target.value });
  }

  updatePassword(e) {
    this.setState({ password: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.redirect());
  }

  redirect() {
    
  }

  render() {
    const submitText = () => {
      if(this.props.formType === 'login') {
        return 'Log in';
      } else {
        return 'Sign up';
      }
    };

    return (
      <form onSubmit={this.handleSubmit}>
        <h2>{submitText()}</h2>

        <label>
          Username:
          <input
            type='text'
            value={this.state.username}
            onChange={this.updateUsername} />
        </label><br />
        <label>
          Password:
          <input
            type='text'
            value={this.state.password}
            onChange={this.updatePassword} />
        </label><br />
      <input type='submit' value={submitText()} />
      </form>
    );
  }
}
